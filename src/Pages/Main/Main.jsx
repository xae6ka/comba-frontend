import img from '../../i/main_image.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Footer from '../../Components/Footer/Footer';
import { addToBasket } from '../../axios/axios';

export default function Main() {

  const addPromo = () => {
    addToBasket({ header: 'по акции', id: 9 });
  }


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
          <Button onClick={addPromo} variant="primary" style={{ marginTop: '30px' }}>
            <span style={{ color: 'white' }}>
              Buy!
            </span>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">3 days ago</Card.Footer>
      </Card>

      <Footer />
    </main>
  );
}
