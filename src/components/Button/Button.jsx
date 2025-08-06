import "./button.scss"

export default function Button({onClick, isDisabled, children, ...props}) {
  return <button
    title="Кнопка не работает, но это временно!"
    disabled
    className={isDisabled ? "button button--disabled" : "button"}
    onClick={onClick}
    {...props}
  >{children}</button>
}