import './game-page.scss';
import { Base64 } from 'js-base64';
import { useParams } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';

import { WordRow } from '../../components/WordRow';
import { LinkButton } from '../../components/LinkButton';
import { Button } from '../../components/Button';
import { RUWORDS } from '../../constants/russianWords.js';
import { useModal } from '../../HOC/ModalProvider';
import { VictoryModal } from '../../components/VictoryModal';
import { Keyboard } from '../../components/Keyboard';
import { HelpModal } from '../../components/HelpModal/index.js';

const wordLength = 5;
const numberOfAttempts = 6;
// prettier-ignore
const defaultKeyStates = {
  й: -1, ц: -1, у: -1, к: -1, е: -1, н: -1, г: -1, ш: -1, щ: -1, з: -1, х: -1, ъ: -1,
  ф: -1, ы: -1, в: -1, а: -1, п: -1, р: -1, о: -1, л: -1, д: -1, ж: -1, э: -1,
  '⌫': -1, я: -1, ч: -1, с: -1, м: -1, и: -1, т: -1, ь: -1, б: -1, ю: -1, '↵': -1,
};

export function GamePage() {
  const [focusedRowIndex, setFocusedRowIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState('ххххх');
  const [keyStates, setKeyStates] = useState(defaultKeyStates);
  const rowsContainerRef = useRef(null);
  const { openModal } = useModal();
  const params = useParams();

  function nextFocusedRowIndex() {
    if (focusedRowIndex !== numberOfAttempts - 1)
      setFocusedRowIndex((prev) => prev + 1);
  }

  function onCompleteHandler(results) {
    if (results.array.every((item) => item === 2)) {
      setTimeout(() => {
        openModal(<VictoryModal correctWord={correctWord} />);
      }, 500);
      return;
    }
    setKeyStates((prev) => ({
      ...prev,
      ...results.object,
    }));
    nextFocusedRowIndex();
  }

  function emulateKeydown(/* key */) {
    // TODO
  }

  useEffect(() => {
    if (params.encodedWord) {
      setCorrectWord(Base64.decode(params.encodedWord));
    } else {
      const randomWord = RUWORDS[Math.floor(Math.random() * RUWORDS.length)];
      setCorrectWord(randomWord.toLowerCase());
    }
  }, []);

  return (
    <div className="game-page">
      <header className="game-page__header">
        <LinkButton to="/">Вернуться</LinkButton>
        <Button
          onClick={() => openModal(<HelpModal correctWord={correctWord} />)}
        >
          Показать правильное слово
        </Button>
      </header>
      <main className="game-page__main">
        <div className="game-page__word-rows-container" ref={rowsContainerRef}>
          {[...Array(numberOfAttempts).keys()].map((index) => {
            return (
              <WordRow
                key={index}
                correctWord={correctWord}
                wordLength={wordLength}
                isFocused={focusedRowIndex === index}
                onCompleteHandler={onCompleteHandler}
              />
            );
          })}
        </div>
        <Keyboard keyStates={keyStates} onClick={emulateKeydown} />
      </main>
    </div>
  );
}
