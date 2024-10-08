import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        <Card data-bs-theme="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              {localStorage.getItem('id')} | {localStorage.getItem('login')}
            </Card.Title>
            <Card.Text>{localStorage.getItem('email')}</Card.Text>
            <Button
              variant="primary"
              style={{ marginTop: '10px' }}
              onClick={resetCookie}
            >
              Logout
            </Button>
          </Card.Body>
        </Card>

        {localStorage.getItem('login') === 'admin' ? (
          <div style={{margin: '20px auto 0 37%'}}>
            <Link to="/admin" style={{ color: 'white' }}>
              /admin
            </Link>
          </div>
        ) : (
          false
        )}
      </section>
    );
  }

  return (
    <Card
      data-bs-theme="dark"
      style={{ width: '18rem', backgroundColor: '#3a3a3a' }}
    >
      <Card.Body>
        <Card.Title>Hello!</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Please login or register and buy another things!
        </Card.Subtitle>

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
