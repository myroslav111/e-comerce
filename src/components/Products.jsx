import React from 'react';
import styled from 'styled-components';
import { sliderItems } from 'data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {sliderItems.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
