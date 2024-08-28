import css from './css/shop.module.css';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

import Card from '../../Components/Card/Card';
import { getCloth } from '../../axios/axios';

export default function Shop() {
  const [shopList, setShopList] = useState();

  useEffect(() => {
    getCloth().then((data) => setShopList(data));
  }, []);

  if (shopList) {
    return (
      <section className={css.shop}>
        {shopList.map((el) => (
          <Card key={el.title} data={el} />
        ))}
      </section>
    );
  } else {
    return (
      <Alert variant="danger" data-bs-theme="dark" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>The server is not responding, please try again later</p>
      </Alert>
    );
  }
}
