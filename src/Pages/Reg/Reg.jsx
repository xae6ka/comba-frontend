import { Link } from 'react-router-dom';
import css from './css/Reg.module.css';

export default function Reg() {
  return (
    <section className={css.reg}>
      <form className={css.reg__reg}>
        <input placeholder="login" type="text" className={css.reg__input} />

        <input placeholder="e-mail" type="text" className={css.reg__input} />

        <input placeholder="password" type="text" className={css.reg__input} />

        <button type="submit" className={css.reg__btn}>
          Reg!
        </button>
      </form>
      <div className={css.reg__login}>
        <span className={css.login__span}>Have Account?</span>

        <Link to="/login" className={css.login__link}>
          Login
        </Link>
      </div>
    </section>
  );
}
