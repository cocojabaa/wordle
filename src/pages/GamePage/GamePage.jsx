import WordRow from "../../components/WordRow";
import "./game-page.scss"
import {Link} from "react-router-dom";
import {useState} from "react";

const wordLength = 5;

export default function GamePage() {
  const [focusedRowIndex, setFocusedRowIndex] = useState(2);

  function nextFocusedRowIndex() {
    if (focusedRowIndex !== 4) setFocusedRowIndex(prev => prev + 1);
  }
  // 0 - ничего
  // 1 - не на своем месте
  // 2 - на своем месте
  // results = {"т": 0, "в": 2, ...}
  function onCompleteHandler(results) {
    nextFocusedRowIndex()
  }

  return <div className="game-page">
    <header className="game-page__header">
      <Link to="/" className="game-page__home-button">Вернуться</Link>
      <p className="game-page__title">Worlde!</p>
    </header>
    <main className="game-page__main">
      <div className="game-page__word-rows-container">
        <WordRow wordLength={wordLength} isFocused={focusedRowIndex === 0} onCompleteHandler={onCompleteHandler} />
        <WordRow wordLength={wordLength} isFocused={focusedRowIndex === 1} onCompleteHandler={onCompleteHandler} />
        <WordRow wordLength={wordLength} isFocused={focusedRowIndex === 2} onCompleteHandler={onCompleteHandler} />
        <WordRow wordLength={wordLength} isFocused={focusedRowIndex === 3} onCompleteHandler={onCompleteHandler} />
        <WordRow wordLength={wordLength} isFocused={focusedRowIndex === 4} onCompleteHandler={onCompleteHandler} />
      </div>
    </main>
  </div>
}