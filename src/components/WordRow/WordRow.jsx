import './word-row.scss';

import { useRef, useState, useEffect } from 'react';

import WordRowResult from '../../utils/WordRowResults.js';
import { letterStateClasses } from '../../constants/letterStateClasses.js';

export function WordRow({
  wordLength,
  correctWord,
  isFocused,
  onCompleteHandler,
  isLastRow,
}) {
  const [enteredWord, setEnteredWord] = useState('');
  const wordRowRef = useRef(null);
  const inputRef = useRef(null);

  function renderLetterColors(results) {
    let isLoss = false;
    if (isLastRow && !results.every((item) => item === 2)) isLoss = true;
    results.forEach((value, index) => {
      wordRowRef.current.children[index].classList.add(
        `word-row__letter--${isLoss ? 'loss' : letterStateClasses[value]}`
      );
    });
  }

  function handleComplete() {
    if (enteredWord.length !== wordLength) return;
    const results = new WordRowResult(correctWord, enteredWord);
    renderLetterColors(results.array);
    onCompleteHandler(results);
  }

  function onInputChangeHandler(e) {
    const newValue = e.target.value;
    if (newValue.length > wordLength) return;
    if (
      newValue.length > enteredWord.length &&
      /^[а-яА-ЯёЁ]$/.test(newValue.slice(-1))
    ) {
      setEnteredWord(newValue);
    } else if (newValue.length < enteredWord.length) setEnteredWord(newValue);
  }

  function onKeyDownHandler(e) {
    const navigationKeys = [
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
      'PageUp',
      'PageDown',
    ];
    if (navigationKeys.includes(e.key)) e.preventDefault();
    if (e.key === 'Enter') handleComplete();
  }

  useEffect(() => {
    if (isFocused) inputRef.current.focus();
  }, [isFocused]);

  return (
    <label className={isFocused ? 'word-row word-row--focus' : 'word-row'}>
      <div className="word-row__letters-container" ref={wordRowRef}>
        {[
          ...Array(wordLength)
            .keys()
            .map((index) => (
              <p className="word-row__letter" key={index}>
                {enteredWord[index]}
              </p>
            )),
        ]}
      </div>
      <input
        type="text"
        className="word-row__input"
        disabled={!isFocused}
        onChange={onInputChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={enteredWord}
        ref={inputRef}
      />
    </label>
  );
}
