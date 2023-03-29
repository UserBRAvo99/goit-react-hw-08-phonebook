import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selector';
import style from './header.module.scss';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
      {(isLoggedIn && (
        <div>
          <UserMenu />
        </div>
      )) || (
        <div>
          <NavLink to="/login" className={style.title}>
            Login
          </NavLink>
          <NavLink to="/register" className={style.title}>
            Register
          </NavLink>
        </div>
      )}
    </header>
  );
}
export default Header;
