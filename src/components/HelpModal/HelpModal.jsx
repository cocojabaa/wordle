import "./help-modal.scss"
import {useModal} from "../../HOC/ModalProvider"
import {Button} from "../Button"

export function HelpModal({correctWord}) {
  const {closeModal} = useModal()
  return <div className="help-modal">
    <p className="help-modal__text">Правильное слово - {correctWord}!</p>
    <Button onClick={closeModal}>Вернуться</Button>
  </div>
}