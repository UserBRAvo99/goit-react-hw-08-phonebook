import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import style from './login.module.scss';

function Login() {
  const dispatch = useDispatch();

  const handleSubmitFormLogin = event => {
    event.preventDefault();

    const formTarget = event.target;
    const email = formTarget.email.value;
    const password = formTarget.password.value;

    dispatch(logIn({ email, password }));

    event.target.reset();
  };
  return (
    <div className={style.box}>
      <form action="#" onSubmit={handleSubmitFormLogin} className={style.form}>
        <label className={style.label}>
          <p className={style.title}>Email</p>
          <input
            className={style.input}
            type="text"
            name="email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
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
            placeholder="Your password"
          />
        </label>
        <button className={style.btn}>Login</button>
      </form>
    </div>
  );
}
export default Login;
