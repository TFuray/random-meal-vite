import axios from "axios"
import { useState } from "react"
import TypingEffect from "./JS/TypingEffect"

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
      <div
        className="grid justify-center"
      >
        <TypingEffect />
      </div>
    </>
  )
}
export default SearchBar
