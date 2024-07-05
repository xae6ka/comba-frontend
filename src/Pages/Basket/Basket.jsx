import css from './css/basket.module.css';
import { useState, useEffect } from 'react';

import BasketCard from '../../Components/BasketCard/BasketCard';

export default function Basket() {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/busket')
      .then((response) => response.json())
      .then((data) => setShopList(data));
  });

  return (

    <section className={css.basket}>
        { shopList.map((el) => (
          <BasketCard key={el.title} data={el} />
        ))}
    </section>
  );
}
