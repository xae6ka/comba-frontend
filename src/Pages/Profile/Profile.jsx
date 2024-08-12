import { Link } from 'react-router-dom';

export default function Profile() {
  const resetCookie = () => {
    localStorage.setItem('id', '');
    localStorage.setItem('login', '');
    localStorage.setItem('password', '');
    localStorage.setItem('email', '');
  };

  if (localStorage.getItem('password')) {
    return (
      <section>
        <h1>{localStorage.getItem('id')}</h1>
        <span>{localStorage.getItem('login')}</span>

        <p>{localStorage.getItem('email')}</p>

        <button onClick={resetCookie}>Logout</button>
      </section>
    );
  }

  return (
    <section>
      <Link to="/reg">Reg</Link>

      <Link to="/login">Login</Link>
    </section>
  );
}
