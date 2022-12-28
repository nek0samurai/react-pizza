import { render } from '@testing-library/react';
import React from 'react';
import styles from './search.module.scss';

import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef();

  const onSearchclick = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 400),
    [],
  );

  const onChangeEvent = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.div}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeEvent}
        className={styles.input}
        placeholder="Поиск пиццы"></input>
      {value && (
        <svg
          onClick={() => onSearchclick()}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
