import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  useEffect(() => {
    async function getFullPizza() {
      try {
        const { data } = await axios.get(`https://635128703e9fa1244e56f22d.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert(error);
      }
    }
    getFullPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price} р.</p>
    </>
  );
};

export default FullPizza;
