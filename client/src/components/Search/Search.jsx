import React from 'react';
import SearchParams from './SearchParams';
import CurrentFoods from './CurrentFoods';
import AddParams from './AddParams';
import Style from '../../styled-components/Wrapper';

let Search = ({ nutrients, params, addParam, clearParams, handleSearch, currentFoods, removeParam, clearFoods }) => {
  //reset the values in 
  return (
      <Style.Search>
        <Style.SearchTitle>Personalize Your Diet</Style.SearchTitle>
        <AddParams nutrients={nutrients} addParam={addParam}/>
        <Style.SecondRowContainer>
          <CurrentFoods currentFoods={currentFoods} handleSearch={handleSearch} clearFoods={clearFoods}/>
          <SearchParams params={params} clearParams={clearParams} removeParam={removeParam}></SearchParams>
        </Style.SecondRowContainer>
      </Style.Search>
  )
}

export default Search;