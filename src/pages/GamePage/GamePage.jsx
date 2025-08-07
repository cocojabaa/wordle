import {WordRow} from "../../components/WordRow";
import {LinkButton} from "../../components/LinkButton";
import "./game-page.scss"
import {Button} from "../../components/Button";
import {useEffect, useState} from "react";
import {RUWORDS} from "../../constants/RussianWords.js"
import {useModal} from "../../HOC/ModalProvider"
import {VictoryModal} from "../../components/VictoryModal";

const wordLength = 5;


export function GamePage() {
  const [focusedRowIndex, setFocusedRowIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState("ххххх");
  const {openModal} = useModal()

  function nextFocusedRowIndex() {
    if (focusedRowIndex !== 4) setFocusedRowIndex(prev => prev + 1);
  }

  function onCompleteHandler(results) {
    if (results.every(item => item === 2)) {
      setTimeout(() => {
        openModal(<VictoryModal correctWord={correctWord} />)
      }, 500)
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
      <LinkButton to="/">Вернуться</LinkButton>
      <Button isDisabled={true}>Показать правильное слово</Button>
    </header>
    <main className="game-page__main">
      <div className="game-page__word-rows-container">
        {[...Array(6).keys()].map(index => {
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