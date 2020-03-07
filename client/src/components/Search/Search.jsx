import React from 'react';
import SearchParams from './SearchParams';
import Style from '../../styled-components/Wrapper';
import CurrentFoods from './CurrentFoods';

//add option for more complex queries such as a range
//clean up UI to make it more pleasant

let Search = ({ nutrients, queries, addQuery, clearQueries, handleSearch, currentFoods }) => {
  return (
      <Style.Search>
        <Style.SearchTitle>Personalize Your Diet</Style.SearchTitle>
        <Style.AddParams>
          <Style.ParamForm id="Search" onSubmit={addQuery}>
            <Style.ParamFormInputs>
              <span>
                <label>Nutrient</label> <br/>
                <input type="text" list="nutrients" name="nutrient"/>
                <datalist id="nutrients">
                  {nutrients.map((nutrient, key) => {
                    return <option key={key} value={nutrient.nutrient_name}/>
                  })}
                </datalist>
              </span>
              <span>
                <br/>
                <select id="operation" name="operation">
                  <option value="less than">Less Than</option>
                  <option value="equal To">Equal To</option>
                  <option value="greater than">Greater Than</option>
                </select>
              </span>
              <span>
                <label>Weight: </label> <br/>
                <input type="number" id="weight" min="0" name="weight"/>
              </span>
            </Style.ParamFormInputs>
            <input type="submit" value="Add Search Parameter"/>
          </Style.ParamForm>
        </Style.AddParams>
        <Style.SecondRowContainer>
          <CurrentFoods currentFoods={currentFoods}/>
          <Style.Queries>
            <button onClick={handleSearch}>QUERY</button>
            <SearchParams queries={queries} clearQueries={clearQueries}></SearchParams>
          </Style.Queries>
        </Style.SecondRowContainer>
      </Style.Search>
  )
}

export default Search;