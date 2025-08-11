import './keyboard.scss';
import { KeyboardButton } from '../KeyboardButton';

export function Keyboard({ keyStates }) {
  return (
    <div className="keyboard">
      <div className="keyboard__buttons-row">
        {Object.keys(keyStates)
          .slice(0, 12)
          .map((key) => (
            <KeyboardButton state={keyStates[key]}>{key}</KeyboardButton>
          ))}
      </div>
      <div className="keyboard__buttons-row">
        {Object.keys(keyStates)
          .slice(12, 23)
          .map((key) => (
            <KeyboardButton state={keyStates[key]}>{key}</KeyboardButton>
          ))}
      </div>
      <div className="keyboard__buttons-row">
        {Object.keys(keyStates)
          .slice(23)
          .map((key) => (
            <KeyboardButton state={keyStates[key]}>{key}</KeyboardButton>
          ))}
      </div>
    </div>
  );
}
