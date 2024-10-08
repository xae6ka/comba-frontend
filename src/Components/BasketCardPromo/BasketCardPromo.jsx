import css from './css/basketcardPromo.module.css';

import image from '../../images/test2.png';
import Button from 'react-bootstrap/Button';

export default function BasketCardPromo({ data }) {
  const deleteBasketPromoCard = () => {
    fetch(
      `http://a1038800.xsph.ru/server/basket/deleteone?busketid=${localStorage.getItem(
        'id'
      )}&clothid=${data.articul}`
    ).then((response) => response.json());
  };

  return (
    <div className={css.basketcard}>
      <span className={css.basketcard__promo}>Promo 2 pairs</span>

      <img src={image} alt="" className={css.basketcard__image} />

      <h1 className={css.basketcard__title}>{data.header}</h1>
      {/* <h1 className={css.basketcard__delete} onClick={deleteBasketPromoCard}>
        delete
      </h1> */}

      <Button variant="outline-secondary" onClick={deleteBasketPromoCard} className={css.basketcard__delete}>Delete</Button>

      <span className={css.basketcard__total}>Total:</span>

      <span className={css.basketcard__price}>{data.cost}$</span>
    </div>
  );
}
