import { Link } from 'react-router-dom';
import css from './css/header.module.css';

import user from './../../images/user.png';

export default function Header() {
  return (
    <header className={css.header}>
      <h1 className={css.header__title}>COMBA</h1>

      <nav className={css.header_nav}>
        <Link to="/" className={css.header__link}>
          Home
        </Link>
        <Link to="/shop" className={css.header__link}>
          Shop
        </Link>
        <Link to="/basket" className={css.header__link}>
          Basket
        </Link>
      </nav>

      <Link to="/profile">
        <img src={user} className={css.header__user} alt="user" />
      </Link>
    </header>
  );
}
