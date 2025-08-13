import './loss-modal.scss';
import { useModal } from '../../HOC/ModalProvider/index.js';
import { Button } from '../Button/index.js';
import { LinkButton } from '../LinkButton/index.js';

export const LossModal = ({ correctWord }) => {
  const { closeModal } = useModal();
  return (
    <div className="loss-modal">
      <p className="loss-modal__title">К сожалению, вы не угадали((</p>
      <p className="loss-modal__text">Загаданное слово - {correctWord}</p>
      <div className="loss-modal__buttons-container">
        <Button onClick={closeModal}>Закрыть</Button>
        <LinkButton to="/">Домой</LinkButton>
      </div>
    </div>
  );
};
