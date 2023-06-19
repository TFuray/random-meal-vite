const axios = require("axios")

const key = process.env.BBC_KEY
const host = "bbc-good-food-api.p.rapidapi.com"
const baseUrl = 'https://bbc-good-food-api.p.rapidapi.com/categories-collections-ids'
const baseHeaders =  {
    'X-RapidAPI-Key': key ,
    'X-RapidAPI-Host': 'bbc-good-food-api.p.rapidapi.com'
  }

const searchMeal = async (req, res) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: baseUrl,
      params: {
        query: req.body.query
      },
      headers: baseHeaders,
    })
    console.log(response.data)
    res.status(200).json(response.data)
  } catch(error) {
    console.error("error with search", error)
    res.status(500).json({error: 'failed to search database'})
  }
}

export {searchMeal}