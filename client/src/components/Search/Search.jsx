import React from 'react';
import SearchParams from './SearchParams';
import Style from '../../styled-components/Wrapper';

//add option for more complex queries such as a range
//clean up UI to make it more pleasant

let Search = ({ nutrients, queries, addQuery, clearQueries, handleSearch }) => {
  return (
      <Style.Search>
        Personalize Your Diet
        
        <input type="text" list="nutrients" name="nutrient"/>
        
        
        <form id="Search" onSubmit={addQuery}>
          <label>Nutrient</label>
          <datalist id="nutrients">
            {nutrients.map((nutrient, key) => {
              return <option key={key} value={nutrient.nutrient_name}/>
            })}
          </datalist>
          <select id="operation" name="operation">
            <option value="less than">Less Than</option>
            <option value="equal To">Equal To</option>
            <option value="greater than">Greater Than</option>
          </select>
          <label>Weight: </label>
          <input type="number" id="weight" min="0" name="weight"/>
          <input type="submit" value="Add Search Parameter"/>
        </form>
        <button onClick={handleSearch}>QUERY</button>
        <SearchParams queries={queries} clearQueries={clearQueries}></SearchParams>
      </Style.Search>
  )
}

export default Search;