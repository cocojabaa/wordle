import "./word-row.scss"
import {useRef, useState, useEffect} from "react"
import WordRowResult from "../../utils/WordRowResults.js";

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
    if (/^[а-яА-Яa-zA-ZёЁ]$/.test(e.key) && !letters[index]) { // проверка на букву и что в ячейке ничего не написано
      setLetters(prev => {
        return prev.map((item, i) => i === index ? e.key.toLowerCase() : item)
      })
      setNextFocusIndex()
    }
    if (e.key === "Backspace") {
      if (letters[focusIndex]) {
        setLetters(prev => {
          return prev.map((item, i) => i === index ? "" : item)
        })
        return
      }
      if (index === 0) return
      setLetters(prev => {
        return prev.map((item, i) => i === index-1 ? "" : item)
      })
      setPreviousFocusIndex()
    }
    if (e.key === "Enter") {
      if (letters.includes("")) return // если есть неписанные буквы
      const enteredWord = letters.join("")
      const results = new WordRowResult(correctWord, enteredWord).results
      results.forEach((value, index) => {
        if (value === 2) wordRowRef.current.children[index].classList.add("word-row__letter-input--correct")
        else if (value === 1) wordRowRef.current.children[index].classList.add("word-row__letter-input--present")
      })
      onCompleteHandler(results)
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

  useEffect(() => {
    if (isFocused) wordRowRef.current.children[0].focus()
  }, [isFocused]);

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