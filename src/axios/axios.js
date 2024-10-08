import axios from 'axios';
import { addNotification } from '../Notifications/notifications';

axios.defaults.baseURL = 'http://a1038800.xsph.ru/server/';

export const regUser = async (login, password, email) => {
  try {
    if (login.length >= 4 && password.length >= 8) {
      await axios.get(
        `users/addone?login=${login}&pass=${password}&email=${email}`
      );

      const { data } = await axios.get(
        `users/getonebylogin?userlogin=${login}`
      );

      //add to localhost
      localStorage.setItem('id', data[0].id);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('email', data[0].email);

      window.location.href = '/';

      return data;
    } else {
      if (login.length < 4) {
        addNotification(
          'Ошибка при регистрации!',
          'Cлишком короткий логин',
          'danger'
        );
      }

      if (password.length < 8) {
        addNotification(
          'Ошибка при регистрации!',
          'Cлишком короткий пароль',
          'danger'
        );
      }
    }
  } catch (error) {
    return `error: ${error}`;
  }
};

export const getUser = async (login) => {
  try {
    const { data } = await axios.get(`users/getonebylogin?userlogin=${login}`);

    return data;
  } catch (error) {
    return `error: ${error}`;
  }
};

export const getCloth = async () => {
  try {
    const { data } = await axios.get('cloth/getall');

    return data;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export const getUserBasket = async () => {
  try {
    const { data } = await axios.get(
      `basket/getone?userid=${localStorage.getItem('id')}`
    );

    return data;
  } catch (error) {
    return `error: ${error}`;
  }
};

export const addToBasket = async (card) => {
  try {
    const { data } = await axios.get(
      `basket/addone?userid=${localStorage.getItem('id')}&clothid=${card.id}`
    );

    if (!data) {
      addNotification(
        'Ошибка!',
        `Чтобы добавить товар ${card.header} в корзину, нужно войти`,
        'danger'
      );
    } else {
      addNotification(`Товар ${card.header} Успешно добавлен в корзину`, null, 'success');
    }
  } catch (error) {
    return `error: ${error}`;
  }
};

// cloth

export const deleteCLoth = async (card) => {
  try {
    const { data } = await axios.get(
      `shop/deleteone&clothid=${card.id}`
    );

    if (!data) {
      addNotification(
        'Ошибка!',
        `Товар ${card.header} не удален`,
        'danger'
      );
    } else {
      addNotification(`Товар ${card.header} Успешно удален`, null, 'success');
    }
  } catch (error) {
    return `error: ${error}`;
  }
};

export const addCloth = async (card) => {
  try {
    const { data } = await axios.get(
      `shop/addcloth?header=${card.header}&cost=${card.cost}`
    );

    return data;
  } catch (error) {
    return `error: ${error}`;
  }
};