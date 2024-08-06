import css from './css/basket.module.css';
import { useState, useEffect } from 'react';

import BasketCard from '../../Components/BasketCard/BasketCard';

export default function Basket() {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
      fetch(`http://server/basket/getone?userid=${localStorage.getItem('id')}`)
        .then((response) => response.json())
        .then((data) => setShopList(data));
  });

  if (shopList.length && localStorage.getItem('id')) {
    return (
      <section className={css.basket}>
        {shopList.map((el) => (
          <BasketCard key={el.title} data={el} />
        ))}
      </section>
    );
  } else if (!localStorage.getItem('login')) {
    return (
      <section className={css.basket}>
        <h1>Please, login or register!</h1>
      </section>
    );
  }

  return (
    <section className={css.basket}>
      <h1>Please, add any product on basket!</h1>
    </section>
  );
}
