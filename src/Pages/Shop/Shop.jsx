import css from './css/shop.module.css';
import { useState, useEffect } from 'react';

import Card from '../../Components/Card/Card';

export default function Shop() {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => response.json())
      .then((data) => setShopList(data));
  });

  return (

    <section className={css.shop}>
      <h1 className={css.shop__title}>Catalog</h1>

        { shopList.map((el) => (
          <Card key={el.title} data={el} />
        ))}
    </section>
  );
}
