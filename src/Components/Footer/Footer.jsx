import css from './css/footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <span className={css.footer__title}>By <Link to={'/'}>Мамкин Программист</Link></span>
    </footer>
  );
}
