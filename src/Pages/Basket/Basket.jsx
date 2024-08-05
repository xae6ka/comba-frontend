import css from './css/basket.module.css';
import { useState, useEffect } from 'react';

import BasketCard from '../../Components/BasketCard/BasketCard';

export default function Basket() {
  const [shopList, setShopList] = useState([]);
  const id = 1;

  useEffect(() => {
    fetch(`http://server/basket/getone?userid=${id}`)
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
