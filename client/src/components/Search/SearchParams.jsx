import React from 'react';

let SearchParams = ({ queries, clearQueries }) => {
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
        <button onClick={clearQueries}>Clear All Params</button>
      </div>
  )
}

export default SearchParams;