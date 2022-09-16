import React from 'react';
import styled from 'styled-components';
import { sliderItems } from 'data';
import Product from './Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://fakestoreapi.com/products/category/${cat}`
            : 'https://fakestoreapi.com/products'
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       products.filter(({ rating }) =>
  //         Object.entries(filters).every(([key, value]) =>
  //           rating[key].includes(value)
  //         )
  //       )
  //     );
  // }, [cat, filters, products]);

  return (
    <Container>
      {products.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
