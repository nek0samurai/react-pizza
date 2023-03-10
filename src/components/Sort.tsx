import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { filterState, setSort } from '../redux/slices/filterSlice';

type SortArr = {
  name: string;
  sortProperty: string;
}

const sortArr: SortArr[] = [
  { name: 'популярности (по возр.)', sortProperty: '-rating' },
  { name: 'популярности (по уб.)', sortProperty: 'rating' },
  { name: 'цене (по возр.)', sortProperty: 'price' },
  { name: 'цене (по уб.)', sortProperty: '-price' },
  { name: 'алфавиту (по возр.)', sortProperty: 'alphabetic' },
  { name: 'алфавиту (по уб.)', sortProperty: '-alphabetic' },
];

function Sort() {
  const dispatch = useDispatch();
  const {sort} = useSelector(filterState);
  const sortRef = React.useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const onClickListItem = (obj: SortArr) => {
    dispatch(setSort(obj));
    setShowPopup(false);
  };

  React.useEffect(() => {
    const outsideFunction = (e: any) => {
      if (!e.path.includes(sortRef.current)) {
        setShowPopup(false);
      }
    };
    document.body.addEventListener('click', outsideFunction);

    return () => document.body.removeEventListener('click', outsideFunction);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setShowPopup(!showPopup)}>{sort.name}</span>
      </div>
      {showPopup && (
        <div className="sort__popup">
          <ul>
            {sortArr.map((value, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(value)}
                className={sort.sortProperty === value.sortProperty ? 'active' : ''}>
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
