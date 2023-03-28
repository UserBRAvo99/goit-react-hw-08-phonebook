import style from './register.module.scss';

function Register() {
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
          <p className={style.title}>Email</p>
          <input
            className={style.input}
            type="mail"
            name="mail"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            required
            // value={'name'}
            // onChange={'change'}
            placeholder="Your email"
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
        <button className={style.btn}>Register</button>
      </form>
    </div>
  );
}

export default Register;
