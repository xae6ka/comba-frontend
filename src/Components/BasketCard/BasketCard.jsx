import css from './css/basketcard.module.css';
import { useState } from 'react';

import image from '../../images/test2.png';

export default function Card({ data }) {
  const [count, setCount] = useState(Number(data.count));

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      fetch(
        `http://server/basket/deleteone?busketid=${localStorage.getItem(
          'id'
        )}&clothid=${data.articul}`
      ).then((response) => response.json())
    }
  }

  function increment() {
    if (count <= 100) {
      setCount(count + 1);
    }
  }

  return (
    <div className={css.basketcard}>
      <img src={image} alt="" className={css.basketcard__image} />

      <h1 className={css.basketcard__title}>{data.header}</h1>

      <span className={css.basketcard__cost}>{data.cost}$</span>

      <button className={css.basketcard__decrement} onClick={decrement}>
        -
      </button>

      <span className={css.basketcard__quantity}>Count: {count}</span>

      <button className={css.basketcard__encrement} onClick={increment}>
        +
      </button>

      <span className={css.basketcard__total}>Total:</span>

      <span className={css.basketcard__price}>{count * data.cost}$</span>
    </div>
  );
}
