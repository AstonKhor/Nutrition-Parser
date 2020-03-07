import React from 'react';
import SearchParams from './SearchParams';
import Style from '../../styled-components/Wrapper';
import CurrentFoods from './CurrentFoods';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//add option for more complex queries such as a range
//clean up UI to make it more pleasant

let Search = ({ nutrients, queries, addQuery, clearParams, handleSearch, currentFoods }) => {
  //reset the values in 
  return (
      <Style.Search>
        <Style.SearchTitle>Personalize Your Diet</Style.SearchTitle>
        <Style.AddParams>
          <Form id="Search" onSubmit={addQuery}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control as="input" type="text" list="nutrients" name="nutrient"/>
                <datalist id="nutrients">
                  {nutrients.map((nutrient, key) => {
                    return <option key={key} value={nutrient.nutrient_name}/>
                  })}
                </datalist>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control as="select" id="operation" name="operation">
                  <option value="less than">Less Than</option>
                  <option value="equal to">Equal To</option>
                  <option value="greater than">Greater Than</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Weight</Form.Label>
                <Form.Control type="number" id="weight" min="0" name="weight"/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Button style={{background: "#135677", border: "none"}} type="submit">
              Add Search Parameter
            </Button>
            <Button style={{background: "#135677", border: "none"}} onClick={handleSearch}>QUERY</Button>
            </Form.Row>
          </Form>
          {/* <Style.ParamForm id="Search" onSubmit={addQuery}>
            <Style.ParamFormInputs>

            </Style.ParamFormInputs>
            <input type="submit" value="Add Search Parameter"/>
          </Style.ParamForm> */}

        </Style.AddParams>
        <Style.SecondRowContainer>
          <CurrentFoods currentFoods={currentFoods}/>
          <Style.Queries>
            <SearchParams queries={queries} clearParams={clearParams}></SearchParams>
          </Style.Queries>
        </Style.SecondRowContainer>
      </Style.Search>
  )
}

export default Search;