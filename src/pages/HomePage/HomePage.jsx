import { Button } from '../../components/Button';
import './home-page.scss';
import { LinkButton } from '../../components/LinkButton';
import githubIcon from '../../assets/github.png';
import { useModal } from '../../HOC/ModalProvider';
import { EnterWordModal } from '../../components/EnterWordModal/index.js';

export function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="home-page">
      <h1 className="home-page__title">Wordle!</h1>
      <div className="home-page__buttons-container">
        <LinkButton to="/play">Играть со случайным словом</LinkButton>
        <Button isDisabled={false} onClick={() => openModal(<EnterWordModal />)}>
          Загадать слово
        </Button>
      </div>
      <a className="home-page__contact" href="https://github.com/cocojabaa">
        <img src={githubIcon} alt="github icon" className="home-page__contact-image" />
      </a>
    </div>
  );
}
