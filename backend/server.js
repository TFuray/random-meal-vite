const path = require("path")
const express = require("express")
require("colors")
require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 3456

// Connect to database
// connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/meal", require("./routes/mealDbRoutes"))



// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    )
  )
} else {
  app.get("/", (req, res) => res.send("please set to production"))
}

app.use(errorHandler)
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})
