import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class CurrentFoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredFood: {},
    }
    this.popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{this.state.nutrient_name}</Popover.Title>
        <Popover.Content>
          <strong>info1</strong><br/>
          info2
          info3
        </Popover.Content>
      </Popover>
    );
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
        <tbody>
          {this.props.currentFoods.map((food, id) => {
            return (
              <tr key={id}>
                <td>{food.food_id}</td>
                <td>{food.food_name}</td>
                <td>
                <OverlayTrigger trigger="click" placement="right" overlay={this.popover}>
                  <Button variant="success">Click me to see</Button>
                </OverlayTrigger>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
  )
  }
}

export default CurrentFoods;