import Button from "../../components/Button"
import "./home-page.scss"
import LinkButton from "../../components/LinkButton"

export default function HomePage() {
  return <div className="home-page">
    <h1 className="home-page__title">Worlde!</h1>
    <div className="home-page__buttons-container">
      <LinkButton to="/game">Играть со случайным словом</LinkButton>
      <Button>Загадать слово</Button>
    </div>
  </div>
}