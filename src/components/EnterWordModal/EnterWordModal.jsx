import {Button} from "../Button/index.js";
import { useModal } from "../../HOC/ModalProvider";
import {useState} from "react"
import "./enter-word-modal.scss"

export const EnterWordModal = () => {
  const {closeModal} = useModal()
  const [inputValue, setInputValue] = useState("")

  function inputChangeHandler(e) {
    if (e.target.value.length > inputValue.length) {
      if (/^[а-яА-ЯёЁ]$/.test(e.target.value.slice(-1)) && inputValue.length < 5) {
        setInputValue(e.target.value.toLowerCase())
      }
    } else setInputValue(e.target.value.toLowerCase())
  }

  return <div className="enter-word-modal">
    <label className="enter-word-modal__label" htmlFor="enter-word-modal-input">Ваше слово:</label>
    <input
      id="enter-word-modal-input"
      className="enter-word-modal__input"
      onChange={inputChangeHandler}
      value={inputValue}
    />
    <div className="enter-word-modal__buttons-container">
      <Button onClick={closeModal}>Отмена</Button>
      <Button isDisabled={true}>Играть</Button>
    </div>
  </div>
}