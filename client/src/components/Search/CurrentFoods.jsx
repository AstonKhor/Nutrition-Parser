import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class CurrentFoods extends React.Component {
  constructor(props) {
    super(props)
    this.popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );
    this.state = {
      hoveredFood: {},
    }
  }

  grabNutrientInfo() {
    // fetch();
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Food Name</td>
            <td></td>
          </tr>
        </thead>
        {this.props.currentFoods.map((food, id) => {
          return (
            <tr key={id}>
              <td>{food.food_id}</td>
              <td>{food.food_name}</td>
              <td>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Click me to see</Button>
              </OverlayTrigger>
              </td>
            </tr>
          )
        })}
      </Table>
  )
  }
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

export default CurrentFoods;