import { Link } from 'react-router-dom';
import './link-button.scss';

export function LinkButton({ to, children, ...props }) {
  return (
    <Link to={to} className="link-button" {...props}>
      {children}
    </Link>
  );
}
