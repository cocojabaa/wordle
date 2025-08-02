import {Link} from "react-router-dom";
import "./link-button.scss"


export default function LinkButton({to, children}) {
  return <Link to={to} className="link-button">{children}</Link>
}