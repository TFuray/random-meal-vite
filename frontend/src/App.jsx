import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/generalComps/Footer"
import Header from "./components/generalComps/Header"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SavedMeals from "./pages/SavedMeals"
import Search from "./pages/Search"
import ShareMeal from "./pages/ShareMeal"

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <DashboardShell /> */}
        <Routes>
          <Route
            path="/"
            element={<Search />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/savedMeals"
            element={<SavedMeals />}
          />
          <Route
            path="/sharemeal"
            element={<ShareMeal />}
          />
          <Route
            path="/search"
            element={<Dashboard />}
          />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
