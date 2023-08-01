import axios from "axios"
import { Component } from "react"
import { Link } from "react-router-dom"
import "../CSS/TypingEffect.css"
import "../CSS/searchBarCss.css"
import SearchResponse from "../SearchResponse"

class TypingEffect extends Component {
  state = {
    targetContent: "",
    content: [],
    lastContent: "",
    inputLock: false,
  }

  componentDidMount() {
    this.autoWriteTimer = setTimeout(() => {
      if (this.state.lastContent !== "") return
      this.setState({ targetContent: "Enter Dish or Ingredients..." }, () => {
        this.refresh()
      })
    }, 500)
  }

  componentWillUnmount() {
    clearTimeout(this.autoWriteTimer)
  }

  handleHiddenInputChange = (e) => {
    e.preventDefault()
    this.setState({ targetContent: e.target.value }, () => {
      if (!this.state.inputLock) {
        this.refresh()
      }
    })
  }

  refresh = () => {
    this.setState({ inputLock: true }, () => {
      const { targetContent, lastContent } = this.state
      if (targetContent.length - lastContent.length === 0) return

      const v = targetContent.substring(0, lastContent.length + 1)
      const content = []
      let blinkPadding = false

      for (let i = 0; i < v.length; i++) {
        const l = v.charAt(i)
        const animClass = i % 2 === 0 ? "letterAnimTop" : "letterAnimBottom"
        const letterClass =
          lastContent.charAt(i) === l ? "letterStatic" : animClass
        if (letterClass !== "letterStatic") blinkPadding = true

        content.push({
          letter: l,
          letterClass,
        })
      }

      this.setState(
        {
          content,
          lastContent: v,
          blinkPadding,
        },
        () => {
          if (targetContent.length - lastContent.length > 1) {
            setTimeout(this.refresh, 150)
          } else {
            this.setState({ inputLock: false })
          }
        }
      )
    })
  }
  search = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.targetContent}`
      )
      console.log(response.data.meals)
      this.setState({ searchData: response.data.meals })
    } catch (error) {
      console.error(error)
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.search()
  }
  render() {
    const { content, blinkPadding, targetContent, searchData } = this.state

    return (
      <>
        <div className="flex justify-center mb-4">
          <form
            // className=" flex flex-grow my-12"
            onSubmit={this.onSubmit}
          >
            <div
              id="input"
              className="typingEffect"
            >
              <div>
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="letterContainer"
                  >
                    <div className={item.letterClass}>{item.letter}</div>
                  </div>
                ))}
                <span className={`blink ${blinkPadding ? "blinkPadding" : ""}`}>
                  |
                </span>
              </div>
              <input
                id="hiddenInput"
                type="text"
                value={this.targetContent}
                onChange={this.handleHiddenInputChange}
              />
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <button
                className="btn btn-primary rounded-xl"
                type="submit"
              >
                Search
              </button>
              <button className="btn btn-secondary  rounded-xl">
                <Link to="/randommeal">Random</Link>
              </button>
            </div>
          </form>
        </div>

        <div>
          <div>{searchData ? <SearchResponse data={searchData} /> : null}</div>
        </div>
      </>
    )
  }
}

export default TypingEffect
