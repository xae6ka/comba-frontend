import { Link } from 'react-router-dom';
import css from './css/login.module.css';

export default function Login() {
  return (
    <section className={css.login}>
      <form className={css.login__login}>
        <input placeholder="login" type="text" className={css.login__input} />

        <input
          placeholder="password"
          type="text"
          className={css.login__input}
        />

        <button type="submit" className={css.login__btn}>
          Reg!
        </button>
      </form>
      <div className={css.login__reg}>
        <span className={css.reg__span}>Create Account!</span>

        <Link to="/reg" className={css.reg__link}>
          Register
        </Link>
      </div>
    </section>
  );
}
