import React from 'react';
import SearchParams from './SearchParams';

//add option for more complex queries such as a range
//clean up UI to make it more pleasant

let Search = ({ nutrients, queries, addQuery }) => {
  return (
      <div>
        <form onSubmit={addQuery}>
          <label>Nutrient</label>
          <input type="text" list="nutrients" name="nutrient"/>
          <datalist id="nutrients">
            {nutrients.map((nutrient, key) => {
              return <option key={key} value={nutrient}/>
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
        <SearchParams queries={queries}></SearchParams>
      </div>
  )
}

export default Search;