import Button from "../../components/Button"
import "./home-page.scss"
import LinkButton from "../../components/LinkButton"
import githubIcon from "../../assets/github.png"

export default function HomePage() {
  return <div className="home-page">
    <h1 className="home-page__title">Worlde!</h1>
    <div className="home-page__buttons-container">
      <LinkButton to="/play">Играть со случайным словом</LinkButton>
      <Button>Загадать слово</Button>
    </div>
    <a className="home-page__contact" href="https://github.com/cocojabaa">
      <img src={githubIcon} alt="github icon" className="home-page__contact-image"/>
    </a>
  </div>
}