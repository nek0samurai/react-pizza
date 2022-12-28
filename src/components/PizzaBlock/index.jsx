import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
const pizzaType = ['тонкое', 'традиционное'];

function PizzaBlock({ title, price, id, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const dispatch = useDispatch();
  const pizzaCount = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const pizzaCountAdded = pizzaCount ? pizzaCount.count : 0;

  const onClickAddPizzas = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[activeSize],
      type: pizzaType[activeType],
    };
    dispatch(addItems(item));
  };

  return (
    <div className="pizza-block" key={imageUrl}>
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </Link>

      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li onClick={() => setActiveType(type)} className={activeType === type ? 'active' : ''}>
              {pizzaType[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((value, i) => (
            <li onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>
              {value} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button onClick={() => onClickAddPizzas()} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>Добавить</span>
          <i>{pizzaCountAdded}</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
