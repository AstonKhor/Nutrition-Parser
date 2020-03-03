import React from 'react';

//add option for more complex queries such as a range
//clean up UI to make it more pleasant

let SearchParams = ({ queries }) => {
  return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Nutrient</td>
              <td>Operation</td>
              <td>Weight</td>
            </tr>
          </thead>
          <tbody>
            {queries.map((query, idx) => (
              <tr key={idx}>
                <td>{query.nutrient}</td>
                <td>{query.operation}</td>
                <td>{query.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Clear All Params</button>
      </div>
  )
}

export default SearchParams;