import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import React, { useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
// import NotFound from './NotFound'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { SearchContext } from '../App';

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
    // console.log(id);
  };

  const { searchValue } = React.useContext(SearchContext);

  const { items, status } = useSelector((state) => state.pizza);

  const getPizzas = async () => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
      }),
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => onClickCategory(id)} />

        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading'
          ? [...new Array(8)].map((item) => <Skeleton />)
          : items.map((item) => <PizzaBlock key={item.id} {...item}></PizzaBlock>)}
      </div>
    </>
  );
}

export default Home;
