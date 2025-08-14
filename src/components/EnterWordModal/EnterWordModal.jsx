import { useState } from 'react';
import { Base64 } from 'js-base64';

import { Button } from '../Button/index.js';
import { useModal } from '../../HOC/ModalProvider';
import './enter-word-modal.scss';
import { useNavigate } from 'react-router-dom';

export const EnterWordModal = () => {
  const { closeModal } = useModal();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function inputChangeHandler(e) {
    if (e.target.value.length > inputValue.length) {
      if (
        /^[а-яА-ЯёЁ]$/.test(e.target.value.slice(-1)) &&
        inputValue.length < 5
      ) {
        setInputValue(e.target.value.toLowerCase());
      }
    } else setInputValue(e.target.value.toLowerCase());
  }

  function onInputKeyDownHandler(e) {
    if (e.key === 'Enter') startGameHandler();
  }

  function startGameHandler() {
    if (inputValue.length === 5) {
      navigate(`/play/${Base64.encodeURL(inputValue)}`);
    }
  }

  return (
    <div className="enter-word-modal">
      <label
        className="enter-word-modal__label"
        htmlFor="enter-word-modal-input"
      >
        Ваше слово:
      </label>
      <input
        id="enter-word-modal-input"
        className="enter-word-modal__input"
        onChange={inputChangeHandler}
        onKeyDown={onInputKeyDownHandler}
        value={inputValue}
        autoComplete="off" // Отключаем автозаполнение
        autoCorrect="off" // Отключаем автокоррекцию
      />
      <div className="enter-word-modal__buttons-container">
        <Button onClick={closeModal}>Отмена</Button>
        <Button onClick={startGameHandler}>Играть</Button>
      </div>
    </div>
  );
};
