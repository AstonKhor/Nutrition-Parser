import React from 'react';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Style from '../../styled-components/Wrapper';

let SearchParams = ({ queries, clearParams }) => {
  return (
    <Style.SearchParams>
      <button onClick={clearParams}>Clear All Params</button>
      <Col>
        {queries.map((query, idx) => (
          <Toast key={idx} animation onClose={clearParams}>
            <Toast.Header>
              <strong className="mr-auto">{query.nutrient}</strong>
              &emsp;
            </Toast.Header>
            <Toast.Body>{query.operation}  {query.weight}</Toast.Body>
          </Toast>
        ))}
      </Col>
    </Style.SearchParams>
  )
}

export default SearchParams;