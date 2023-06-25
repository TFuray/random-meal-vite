import axios from "axios"
import { useState } from "react"
import "./CSS/searchBarCss.css"
import TypingEffect from "./JS/TypingEffect"
import SearchResponse from "./SearchResponse"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [searchData, setSearchData] = useState()

  const search = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )
      console.log(response.data.meals)
      setSearchData(response.data.meals)
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
      {/* <div
      // className="w-96 my-12 mx-auto justify-center flex flex-col"
      > */}
        <form onSubmit={onSubmit}>
           <input
            // id="hiddenInput"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search recipes"
            // className="input input-bordered input-primary w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn btn-success"
          >
            Go
          </button>
        </form>
        {/* <div className="flex just">
        <TypingEffect />
      </div> */}
      <div>{searchData ? <SearchResponse data={searchData} /> : null}</div>
    </>
  )
}
export default SearchBar
