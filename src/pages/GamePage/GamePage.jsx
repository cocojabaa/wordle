import WordRow from "../../components/WordRow";
import "./game-page.scss"

export default function GamePage() {
  return <div className="game-page">
    <div className="word-rows-container">
      <WordRow word="гнездо" correctLetters={[1, 3]}/>
      <WordRow word="гнездо" correctLetters={[2, 4]}/>
      <WordRow word="гнездо" correctLetters={[3, 4]}/>
      <WordRow word="гнездо" correctLetters={[3, 4]}/>
      <WordRow word="гнездо" correctLetters={[3, 4]}/>
    </div>
  </div>
}