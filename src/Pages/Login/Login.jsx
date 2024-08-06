import { Link } from 'react-router-dom';
import css from './css/login.module.css';

import { useState } from 'react';

export default function Login() {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState([]);

  const [data, setData] = useState([]);

  const GetUserByName = () => {
    fetch(
      `http://server/users/getonebylogin?userlogin=${login}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const loginBtn = (e) => {
    e.preventDefault();

    GetUserByName();

    if (data[0] && data[0].login == login && data[0].pass == password) {
      localStorage.setItem('id', data[0].id);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('email', data[0].email);
    }
  };

  return (
    <section className={css.login}>
      <form className={css.login__login}>
        <input
          placeholder="login"
          type="text"
          className={css.login__input}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          placeholder="password"
          type="text"
          className={css.login__input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginBtn} className={css.login__btn}>
          Login!
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
