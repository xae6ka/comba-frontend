import css from './css/shop.module.css';
import { useState, useEffect } from 'react';

import Card from '../../Components/Card/Card';
import { getCloth } from '../../axios/axios';

export default function Shop() {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    getCloth().then((data) => setShopList(data));
  }, []);

  return (
    <section className={css.shop}>
      {shopList.map((el) => (
        <Card key={el.title} data={el} />
      ))}
    </section>
  );
}
