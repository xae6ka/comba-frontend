import css from './css/card.module.css';

export default function Card({ data }) {
  return (
    <div className={css.card}>
      <img src="" alt="" className={css.card__image} />

      <h1 className={css.card__title}>{data.title}</h1>

      <span className={css.card__cost}>{data.cost}</span>
    </div>
  );
}
