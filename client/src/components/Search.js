import React from 'react';

//convert to stateless component
//fix sample data pathway to prop

let Search = () => {
  return (
      <div>
        <form>
          <label>Nutrient</label>
          <input type="text" list="nutrients" />
          <datalist id="nutrients">
            {this.nutrients.map((nutrient, key) => {
              return <option key={key} value={nutrient}/>
            })}
          </datalist>
          <select id="operation">
            <option value="less than">Less Than</option>
            <option value="equal To">Equal To</option>
            <option value="greater than">Greater Than</option>
          </select>
          <label>Weight: </label>
          <input type="number" id="weight" min="0"/>
          <input type="submit"/>
        </form>
      </div>
  )
}

export default Search;