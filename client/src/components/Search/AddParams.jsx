import React from 'react';
import Style from '../../styled-components/Wrapper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


let AddParams = ({ nutrients, addParam, handleSearch }) => {
  return (
    <Style.AddParams>
      <form style={{display: 'flex', flexDirection: 'column'}} noValidate autoComplete="off" id="Search" onSubmit={addParam}>
        <div>
          <TextField style={{width: '200px', margin: '10px'}} select label="Nutrients" name="nutrient" defaultValue={''}>
            {nutrients.map((nutrient, key) => {
              return <MenuItem key={key} value={nutrient.nutrient_name}>{nutrient.nutrient_name.split(',')[0]}</MenuItem>
            })}
          </TextField>
          <TextField style={{width: '122px', margin: '10px'}} select id="operation" label={' '} name="operation" defaultValue={"less than"}>
            <MenuItem value="less than">Less Than</MenuItem>
            <MenuItem value="equal to">Equal To</MenuItem>
            <MenuItem value="greater than">Greater Than</MenuItem>
          </TextField>
          <TextField style={{width: '170px', margin: '10px'}} type="number" label="Weight(g) / Energy(cal)" id="weight" min="0" name="weight" />
        </div>
        <br/>
        <div>
          <Button style={{ background: '#49b9d3', border: 'none', color: 'white', marginLeft: '175px'}} type="submit">
            Add Search Parameter
          </Button>
        </div>
      </form>
    </Style.AddParams>
  )
}

export default AddParams;