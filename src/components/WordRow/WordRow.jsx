import "./word-row.scss"
import {useRef, useState, useEffect} from "react"

export default function WordRow({wordLength, correctWord, isFocused, onCompleteHandler}) {
  const [focusIndex, setFocusIndex] = useState(0)
  const wordRowRef = useRef(null)
  const [letters, setLetters] = useState(Array(wordLength).fill(""))

  function onRowClickHandler() {
    wordRowRef.current.children[focusIndex].focus()
  }

  function isInputClickable(inputIndex) {
    return isFocused && focusIndex === inputIndex
  }

  function onInputKeydownHandler(e, index) {
    if (e.key.length === 1 && e.key !== " " && !letters[index]) {
      setLetters(prev => {
        return prev.map((item, i) => i === index ? e.key : item)
      })
      setNextFocusIndex()
    }
    if (e.key === "Backspace") {
      setLetters(prev => {
        return prev.map((item, i) => i === index ? "" : item)
      })
      setPreviousFocusIndex()
    }
    if (e.key === "Enter") {
      onCompleteHandler(letters.join(""))
      // TODO выделение букав
    }
    if (e.key === "ArrowRight") setNextFocusIndex()
    if (e.key === "ArrowLeft") setPreviousFocusIndex()
  }

  function setNextFocusIndex() {
    if (focusIndex !== wordLength - 1) setFocusIndex(prev => prev + 1)
  }

  function setPreviousFocusIndex() {
    if (focusIndex !== 0) setFocusIndex(prev => prev - 1)
  }

  useEffect(() => {
    wordRowRef.current.children[focusIndex].focus()
  }, [focusIndex])

  return <div
    className={isFocused ? "word-row word-row--focus" : "word-row"}
    onClick={onRowClickHandler}
    ref={wordRowRef}
  >
    {[...Array(wordLength).keys()].map(index => {
      return <input
        type="text"
        className="word-row__letter-input"
        readOnly={!isInputClickable(index)}
        disabled={!isFocused}
        key={index}
        onKeyDown={e => onInputKeydownHandler(e, index)}
        value={letters[index]}
      />
    })}
  </div>
}