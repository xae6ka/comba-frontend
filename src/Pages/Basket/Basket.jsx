import css from './css/basket.module.css';
import { useState, useEffect } from 'react';

import image_cart from '../../i/cart.png';

import BasketCard from '../../Components/BasketCard/BasketCard';
import BasketCardPromo from '../../Components/BasketCardPromo/BasketCardPromo';
import { getUserBasket } from '../../axios/axios';

export default function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    getUserBasket().then((data) => setBasket(data));
    basket.filter((el) => el.promo);
  });

  if (basket.length && localStorage.getItem('id')) {
    return (
      <section className={css.basket}>
        {basket
          .filter((el) => el.promo)
          .map((el) => (
            <BasketCardPromo key={el.title} data={el} />
          ))}

        {basket
          .filter((el) => !el.promo)
          .map((el) => (
            <BasketCard key={el.title} data={el} />
          ))}
      </section>
    );
  } else if (!localStorage.getItem('login')) {
    return (
      <section className={css.basket_error}>
        <img src={image_cart} alt="" />

        <h1>Please, login or register!</h1>
      </section>
    );
  }

  return (
    <section className={css.basket_error}>
      <img src={image_cart} alt="" />

      <h1>Please, add any product on basket!</h1>
    </section>
  );
}
