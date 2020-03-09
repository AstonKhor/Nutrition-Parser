import React from 'react';
import Style from '../../styled-components/Wrapper';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

let SearchParams = ({ params, clearParams, removeParam }) => {
  const convertOperation = (operation) => {
    if (operation === 'less than') { return '<'; }
    if (operation === 'equal to') { return '='; }
    if (operation === 'greater than') { return '>'; }
  }
  //convertOperation(query.operation)
  const addUnits = (nutrient) => {
    if (nutrient === 'Energy') {
      return 'Calories';
    } else {
      return 'grams';
    }
  }


  return (
    <div>
      <Style.SearchParams>
        <header>Search Parameters</header>
        <Button onClick={clearParams} style={{background: "#49b9d3", border: "none", color: 'white', margin: '15px'}}>
          Clear All Params
        </Button>
        <div>
          {params.map((query, idx) => (
            <div key={idx} >
              <Chip 
                onDelete={() => { removeParam(idx) }} 
                avatar={<Style.SearchParamsImage/>} 
                label={`${query.nutrient.split(',')[0]} ${query.operation} ${query.weight} ${addUnits(query.nutrient)}`}
                style={{background: '#ffeddf', margin: '5px'}}
                />
            </div>
          ))}
        </div>
      </Style.SearchParams>
    </div>
  )
}

export default SearchParams;