import { NavLink } from 'react-router-dom';
import style from './header.module.scss';

function Header() {
  return (
    <header className={style.Header}>
      <div>
        <NavLink to="/" className={style.title}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={style.title}>
          Contacts
        </NavLink>
      </div>
      <div>
        <NavLink to="/login" className={style.title}>
          Login
        </NavLink>
        <NavLink to="/register" className={style.title}>
          Register
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
