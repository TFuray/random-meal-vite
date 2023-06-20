const axios = require("axios")

const key = "a2737ca102msh73d48681676ec70p1f92d4jsn1832240b8d64"
const host = "bbc-good-food-api.p.rapidapi.com"
const baseUrl =
  "https://bbc-good-food-api.p.rapidapi.com/categories-collections-ids"
const baseHeaders = {
  "X-RapidAPI-Key": key,
  "X-RapidAPI-Host": "bbc-good-food-api.p.rapidapi.com",
}

const searchMeal = async (req, res) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: baseUrl,
      params: {
        query: req.body.query,
      },
      headers: baseHeaders,
    })
    console.log(response.data)
  } catch (error) {
    console.error("error with search", error)
  }
}

export default searchMeal
