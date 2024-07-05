import css from './css/card.module.css';

//test
import image from '../../images/test1.png';

export default function Card({ data }) {
  return (
    <div className={css.card}>
      <img src={image} alt="" className={css.card__image} />

      <h1 className={css.card__title}>{data.title}</h1>

      <span className={css.card__cost}>{data.cost}$</span>

      <button className={css.card__tobusket}>
        Add To Busket
      </button>
    </div>
  );
}
