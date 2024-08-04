import css from './css/shop.module.css';
import { useState, useEffect } from 'react';

import Card from '../../Components/Card/Card';

export default function Shop() {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    fetch('http://server/cloth/getall')
      .then((response) => response.json())
      .then((data) => setShopList(data));
  });

  return (

    <section className={css.shop}>
        { shopList.map((el) => (
          <Card key={el.title} data={el} />
        ))}
    </section>
  );
}
