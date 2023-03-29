import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selector';
import style from './userMenu.module.scss';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.wrapper}>
      <p className={style.paragraph}>{user.email || ''}</p>
      <button
        className={style.btn}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
