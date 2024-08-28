import img from '../../i/main_image.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';

export default function Main() {
  return (
    <main className="main">
      <Image src={img} fluid />

      <Card
        className="text-center"
        data-bs-theme="dark"
        style={{ marginTop: '70px' }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special tender</Card.Title>
          <Card.Text>Two pairs of sneakers for the price of one</Card.Text>
          <Button variant="primary" style={{ marginTop: '30px' }}>
            <Link to={'/shop'} style={{ color: 'white' }}>
              Buy!
            </Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">3 days ago</Card.Footer>
      </Card>

      <Footer />
    </main>
  );
}
