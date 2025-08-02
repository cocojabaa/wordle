import "./word-row.scss"

export default function WordRow({word}) {



  return <div className="word-row">
    <div className="word-row__letter-container">
      <p className="word-row__letter">{word[0]}</p>
    </div>
    <div className="word-row__letter-container">
      <p className="word-row__letter">{word[1]}</p>
    </div>
    <div className="word-row__letter-container">
      <p className="word-row__letter">{word[2]}</p>
    </div>
    <div className="word-row__letter-container">
      <p className="word-row__letter">{word[3]}</p>
    </div>
    <div className="word-row__letter-container">
      <p className="word-row__letter">{word[4]}</p>
    </div>
    <div className="word-row__letter-container">
      <p className="word-row__letter">{word[5]}</p>
    </div>
  </div>
}