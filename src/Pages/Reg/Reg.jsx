import { Link } from 'react-router-dom';
import css from './css/Reg.module.css';

import { addNotification } from '../../Notifications/notifications';

import { regUser } from '../../axios/axios';
import { useState } from 'react';

const Notification = (msg) => {
  addNotification('Ошибка при попытке регистрации!', msg, 'warning');
};

export default function Reg() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const reg = (e) => {
    e.preventDefault();

    if (!login) {
      Notification('Вы не ввели логин');
    } else if (!password) {
      Notification('Вы не ввели пароль');
    } else if (!email) {
      Notification('Вы не ввели почту');
    } else {
      regUser(login, password, email);
    }
  };

  return (
    <section className={css.reg}>
      <form className={css.reg__reg}>
        <input
          placeholder="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={css.reg__input}
        />

        <input
          placeholder="e-mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css.reg__input}
        />

        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={css.reg__input}
        />

        <button onClick={reg} type="submit" className={css.reg__btn}>
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
