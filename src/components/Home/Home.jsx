import style from './home.module.scss';

function Home() {
  return (
    <div className={style.homeWrapper}>
      <h1 className={style.title}>Welcome!</h1>
      <p className={style.paragraph}>
        This is an application for recording your contacts, register and use all
        the possibilities.
      </p>
    </div>
  );
}

export default Home;
