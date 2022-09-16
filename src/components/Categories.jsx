import React from 'react';
import styled from 'styled-components';
import { categories } from 'data';
import CategoriesItem from './CategoriesItem';
import { mobile } from '../responsive';

const Container = styled.div`
  /* background-color: gray; */
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
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
