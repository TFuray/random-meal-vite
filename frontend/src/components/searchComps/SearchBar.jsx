import axios from "axios"
import { useState } from "react"
import SearchResponse from "./SearchResponse"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [searchData, setSearchData] = useState([])

  const search = async () => {
    const options = {
      method: "GET",
      url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
      params: {
        query: `${query}`,
      },
      headers: {
        "X-RapidAPI-Key": "a2737ca102msh73d48681676ec70p1f92d4jsn1832240b8d64",
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
      },
    }

    try {
      const response = await axios.request(options)
      console.log(response.data)
      return setSearchData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    search()
  }
  return (
    <>
      <div className="w-96 my-12 mx-auto justify-center flex flex-col">
        <form onSubmit={onSubmit}>
          <input
            id="query"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search recipes"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn btn-success"
          >
            Go
          </button>
        </form>
      </div>
      <div>
        <SearchResponse data={searchData} />
      </div>
    </>
  )
}
export default SearchBar
