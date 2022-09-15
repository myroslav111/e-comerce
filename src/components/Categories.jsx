import React from 'react';
import styled from 'styled-components';
import { categories } from 'data';
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoriesItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
