import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/Navbar';
import Announcement from 'components/Announcement';
import Products from 'components/Products';
import Newsletter from 'components/Newsletter';
import Footer from 'components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option`
  margin: 20px;
`;

const ProductList = () => {
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState('newest');
  const location = useLocation();

  const cat = location.pathname.split('/')[2].replace('%20', ' ');

  const handleFilters = e => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="rate" onChange={handleFilters}>
            <Option disabled>Rating</Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
          <Select name="count" onChange={handleFilters}>
            <Option disabled>Count</Option>
            <Option>less then 100</Option>
            <Option>less then 200</Option>
            <Option>less then 300</Option>
            <Option>less then 400</Option>
            <Option>less then 500</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
