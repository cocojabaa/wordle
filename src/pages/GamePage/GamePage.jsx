import {WordRow} from "../../components/WordRow";
import "./game-page.scss"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {RUWORDS} from "../../constants/RussianWords.js"

const wordLength = 5;


export function GamePage() {
  const [focusedRowIndex, setFocusedRowIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState("ххххх");

  function nextFocusedRowIndex() {
    if (focusedRowIndex !== 4) setFocusedRowIndex(prev => prev + 1);
  }

  function onCompleteHandler(results) {
    if (results.every(item => item === 2)) {
      return
    }
    nextFocusedRowIndex()
  }

  useEffect(() => {
    const randomWord = RUWORDS[Math.floor(Math.random() * RUWORDS.length)]
    setCorrectWord(randomWord.toLowerCase())
    console.log("ПРАВИЛЬНОЕ СЛОВО:", randomWord.toLowerCase())
  }, [])

  return <div className="game-page">
    <header className="game-page__header">
      <Link to="/" className="game-page__home-button">Вернуться</Link>
      <p className="game-page__title">Worlde!</p>
    </header>
    <main className="game-page__main">
      <div className="game-page__word-rows-container">
        {[...Array(5).keys()].map(index => {
          return <WordRow
            key={index}
            correctWord={correctWord}
            wordLength={wordLength}
            isFocused={focusedRowIndex === index}
            onCompleteHandler={onCompleteHandler}
          />
        })}
      </div>
    </main>
  </div>
}