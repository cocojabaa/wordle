import {useModal} from "../../HOC/ModalProvider"
import {LinkButton} from "../LinkButton"
import {Button} from "../Button"
import "./victory-modal.scss"


export function VictoryModal({correctWord}) {
  const {closeModal} = useModal()

  return <div className="victory-modal">
    <p className="victory-modal__title">Вы выиграли!</p>
    <p className="victory-modal__text">Загаданное слово - {correctWord}</p>
    <div className="victory-modal__buttons-container">
      <Button onClick={closeModal}>Закрыть</Button>
      <LinkButton to="/">Домой</LinkButton>
    </div>
  </div>
}