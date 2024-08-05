import { Link } from 'react-router-dom';
import css from './css/Reg.module.css';

import { useState } from 'react';

export default function Reg() {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);

  const [data, setData] = useState([]);

  const reg = () => {
    fetch(
      `http://server/users/addone?login=${login}&pass=${password}&email=${email}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));

    console.log(data);
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
