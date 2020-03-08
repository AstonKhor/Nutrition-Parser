import React from 'react';
import Style from '../../styled-components/Wrapper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

let AddParams = ({ nutrients, addParam, handleSearch }) => {
  return (
    <Style.AddParams>
        <Form id="Search" onSubmit={addParam}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Nutrients</Form.Label>
                <Form.Control as="input" type="text" list="nutrients" name="nutrient"/>
                <datalist id="nutrients">
                  {nutrients.map((nutrient, key) => {
                    return <option key={key} value={nutrient.nutrient_name}/>
                  })}
                </datalist>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>&emsp;</Form.Label>
                <Form.Control as="select" id="operation" name="operation">
                  <option value="less than">Less Than</option>
                  <option value="equal to">Equal To</option>
                  <option value="greater than">Greater Than</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Weight / Energy</Form.Label>
                <Form.Control type="number" id="weight" min="0" name="weight"/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Button style={{background: "#135677", border: "none"}} type="submit">
              Add Search Parameter
            </Button>
            </Form.Row>
          </Form>
    </Style.AddParams>
  )
}

export default AddParams;