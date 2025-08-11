import './button.scss';

export function Button({ onClick, isDisabled, children, ...props }) {
  return (
    <button
      title={isDisabled ? 'Кнопка не работает, но это временно!' : ''}
      disabled={isDisabled}
      className={isDisabled ? 'button button--disabled' : 'button'}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
