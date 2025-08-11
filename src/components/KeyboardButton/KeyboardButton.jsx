import './keyboard-button.scss';
import { letterStateClasses } from '../../constants/letterStateClasses.js';

export function KeyboardButton({ state, children }) {
  return (
    <button
      className={
        state === -1
          ? 'keyboard-button'
          : `keyboard-button keyboard-button--${letterStateClasses[state]}`
      }
    >
      {children}
    </button>
  );
}
