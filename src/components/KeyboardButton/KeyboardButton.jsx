import './keyboard-button.scss';
import { letterStateClasses } from '../../constants/letterStateClasses.js';

export function KeyboardButton({ state, children, onClick }) {
  return (
    <button
      className={
        state === -1
          ? 'keyboard-button'
          : `keyboard-button keyboard-button--${letterStateClasses[state]}`
      }
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
}
