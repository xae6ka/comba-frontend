import css from './css/card.module.css';

export default function Card({ data }) {
  return (
    <div className={css.card}>
      <h1 className={css.card__title}>{data.title}</h1>

      <p className={css.card__subtitle}>{data.subtitle}</p>

      <span className={css.card__cost}>{data.cost}</span>
    </div>
  );
}
