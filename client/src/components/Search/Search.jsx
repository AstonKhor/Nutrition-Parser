import React from 'react';
import SearchParams from './SearchParams';
import CurrentFoods from './CurrentFoods';
import AddParams from './AddParams';
import Style from '../../styled-components/Wrapper';

let Search = ({ nutrients, params, addParam, clearParams, handleSearch, currentFoods, removeParam, clearFoods, handleAddSwitch, clearPrevSearch }) => {
  //reset the values in 
  return (
      <Style.Search>
        <AddParams nutrients={nutrients} addParam={addParam}/>
        <Style.SecondRowContainer>
          <CurrentFoods currentFoods={currentFoods} handleSearch={handleSearch} clearFoods={clearFoods} handleAddSwitch={handleAddSwitch} clearPrevSearch={clearPrevSearch}/>
          <SearchParams params={params} clearParams={clearParams} removeParam={removeParam}></SearchParams>
        </Style.SecondRowContainer>
      </Style.Search>
  )
}

export default Search;