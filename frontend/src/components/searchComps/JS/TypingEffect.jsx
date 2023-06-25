// import { useState, useEffect } from "react"
// import "../CSS/TypingEffect.css"
// import "../CSS/searchBarCss.css"

// const TypingEffect = () => {
//   const [targetContent, setTargetContent] = useState("")
//   const [content, setContent] = useState([])
//   const [lastContent, setLastContent] = useState("")
//   const [inputLock, setInputLock] = useState(false)
//   const [blinkPadding, setBlinkPadding] = useState(false)
//   useEffect(() => {
//     const autoWriteTimer = setTimeout(() => {
//       if (lastContent !== "") return
//       setTargetContent("type something...")
//       refresh()
//     }, 1000)
//     return () => clearTimeout(autoWriteTimer)
//   }, [lastContent])
//   const handleHiddenInputChange = (e) => {
//     e.preventDefault()
//     setTargetContent(e.target.value)
//     if (!inputLock) {
//       refresh()
//     }
//   }
//   const refresh = () => {
//     setInputLock(true)
//     if (targetContent.length - lastContent.length === 0) {
//       return
//     }
//     const v = targetContent.substring(0, lastContent.length + 1)
//     const newContent = []
//     let newBlinkPadding = false
//     for (let i = 0; i < v.length; i++) {
//       const l = v.charAt(i)
//       const animClass = i % 2 === 0 ? "letterAnimTop" : "letterAnimBottom"
//       const letterClass =
//         lastContent.charAt(i) === l ? "letterStatic" : animClass
//       if (letterClass !== "letterStatic") newBlinkPadding = true
//       newContent.push({
//         letter: l,
//         letterClass,
//       })
//     }
//     setContent(newContent)
//     setLastContent(v)
//     setBlinkPadding(newBlinkPadding)
//     if (targetContent.length - lastContent.length > 1) {
//       setTimeout(refresh, 150)
//     } else {
//       setInputLock(false)
//     }
//   }
//   return (
//     <div>
//       <div>
//         {content.map((item, index) => (
//           <div
//             key={index}
//             className="letterContainer"
//           >
//             <div className={item.letterClass}>{item.letter}</div>
//           </div>
//         ))}
//         <span className={`blink ${blinkPadding ? "blinkPadding" : ""}`}>|</span>
//       </div>
//       <input
//         id="hiddenInput"
//         type="text"
//         onChange={handleHiddenInputChange}
//       />
//     </div>
//   )
// }
// export default TypingEffect

import { Component } from "react"
import "../CSS/TypingEffect.css"
import "../CSS/searchBarCss.css"

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
      this.setState({ targetContent: "type something..." }, () => {
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

  render() {
    const { content, blinkPadding } = this.state

    return (
      <div className="text-[40px] ">
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
          onChange={this.handleHiddenInputChange}
        />
      </div>
    )
  }
}

export default TypingEffect
