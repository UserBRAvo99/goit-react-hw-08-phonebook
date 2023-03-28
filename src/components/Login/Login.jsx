import style from './login.module.scss';

function Login() {
  return (
    <div className={style.box}>
      <form
        action="#"
        // onSubmit={'submit'}
        className={style.form}
      >
        <label className={style.label}>
          <p className={style.title}>Name</p>
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            // value={'name'}
            // onChange={'change'}
            placeholder="Your name"
          />
        </label>
        <label className={style.label}>
          <p className={style.title}>Password</p>
          <input
            className={style.input}
            type="password"
            name="password"
            required
            // value={'phone'}
            // onChange={'change'}
            placeholder="Your password"
          />
        </label>
        <button className={style.btn}>Login</button>
      </form>
    </div>
  );
}
export default Login;
