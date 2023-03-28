import style from './userMenu.module.scss';

function UserMenu() {
  return (
    <div className={style.wrapper}>
      <p className={style.paragraph}>mango@mail.com</p>
      <button className={style.btn}>Logout</button>
    </div>
  );
}

export default UserMenu;
