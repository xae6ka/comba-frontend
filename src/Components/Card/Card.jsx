import css from './css/card.module.css';

//test
import image from '../../images/test1.png';

export default function Card({ data }) {
  const addToBusket = () => {
    console.log('TODO CREATE ADD TO BUSKET FUNCTION')
  };

  return (
    <div className={css.card}>
      <img src={image} alt="" className={css.card__image} />

      <h1 className={css.card__title}>{data.header}</h1>

      <span className={css.card__cost}>{data.cost}$</span>

      <button onClick={addToBusket} className={css.card__tobusket}>
        Add To Busket
      </button>
    </div>
  );
}
