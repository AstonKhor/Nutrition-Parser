import React from 'react';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Style from '../../styled-components/Wrapper';
import Button from 'react-bootstrap/Button';

let SearchParams = ({ params, clearParams, removeParam }) => {
  return (
    <Style.SearchParams>
      <header>Search Parameters</header>
      <Button onClick={clearParams} style={{background: "#135677", border: "none"}}>Clear All Params</Button>
      <br/>
      <Col>
        {params.map((query, idx) => (
          <span key={idx} >
            <Toast animation onClose={() => { removeParam(idx) }}>
              <Toast.Header style={{display: 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'background': '#ffeddf', "fontSize": '20'}}>
                <Style.SearchParamsImage/>
                &ensp;
                <strong className="mr-auto">{query.nutrient}</strong>
                &emsp;
              </Toast.Header>
              <Toast.Body>{query.operation}  {query.weight}</Toast.Body>
            </Toast>
            <br/>
          </span>
        ))}
      </Col>
    </Style.SearchParams>
  )
}

export default SearchParams;