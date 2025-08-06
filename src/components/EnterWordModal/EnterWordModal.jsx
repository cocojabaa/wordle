import {Button} from "../Button/index.js";
import { useModal } from "../../HOC/ModalProvider";
import {useState} from "react"
import "./enter-word-modal.scss"

export const EnterWordModal = () => {
  const {closeModal} = useModal()
  const [inputValue, setInputValue] = useState("")

  function inputChangeHandler(e) {
    if (e.target.value.length > inputValue.length) {
      if (/^[а-яА-Яa-zA-ZёЁ]$/.test(e.target.value.slice(-1)) && inputValue.length < 5) {
        setInputValue(e.target.value.toLowerCase())
      }
    } else setInputValue(e.target.value.toLowerCase())
  }

  return <>
    <input
      className="modal-input"
      onChange={inputChangeHandler}
      value={inputValue} // Добавьте value для контролируемого инпута
    />
    <Button onClick={closeModal}>Закрыть модалку</Button>
  </>
}