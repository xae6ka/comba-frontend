import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Profile() {
  const resetCookie = () => {
    localStorage.setItem('id', '');
    localStorage.setItem('login', '');
    localStorage.setItem('password', '');
    localStorage.setItem('email', '');

    window.location.href = '/';
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
    <Card data-bs-theme="dark" style={{ width: '18rem', backgroundColor: '#3a3a3a' }}>
      <Card.Body>
        <Card.Title>Hello!</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Please login or register and buy another things!</Card.Subtitle>

        <Link class="card-link" to="/reg">
          Register
        </Link>
        <Link class="card-link" to="/login">
          Login
        </Link>
      </Card.Body>
    </Card>
  );
}
