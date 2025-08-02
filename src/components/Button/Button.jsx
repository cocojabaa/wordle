import "./button.scss"

export default function Button({onClick, children}) {
  return <button className="button" onClick={onClick}>{children}</button>
}