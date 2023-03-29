import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import style from './register.module.scss';

function Register() {
  const dispatch = useDispatch();

  const handleSubmitFormRegister = event => {
    event.preventDefault();

    const formTarget = event.target;
    const name = formTarget.name.value;
    const email = formTarget.email.value;
    const password = formTarget.password.value;

    dispatch(register({ name, email, password }));

    event.target.reset();
  };
  return (
    <div className={style.box}>
      <form
        action="#"
        onSubmit={handleSubmitFormRegister}
        className={style.form}
      >
        <label className={style.label}>
          <p className={style.title}>Name</p>
          <input
            className={style.input}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            placeholder="Your name"
          />
        </label>
        <label className={style.label}>
          <p className={style.title}>Email</p>
          <input
            className={style.input}
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            required
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
            placeholder="Your password"
          />
        </label>
        <button className={style.btn}>Register</button>
      </form>
    </div>
  );
}

export default Register;
