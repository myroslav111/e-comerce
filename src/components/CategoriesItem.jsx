import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  ${mobile({ height: '20vh', objectFit: 'contain' })}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  color: tomato;
`;

const Button = styled.button`
  background-color: #111827;
  background-color: teal;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, system-ui,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;

  &:hover {
    background-color: #374151;
  }

  &:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    & {
      padding: 0.75rem 1.5rem;
    }
  }
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <NavLink to={`/products/${item.category}`}>
        <Image src={item.image} />
        <Info>
          <Title>{item.category}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </NavLink>
    </Container>
  );
};

export default CategoriesItem;
