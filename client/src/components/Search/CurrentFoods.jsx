import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Style from '../../styled-components/Wrapper';

class CurrentFoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      nutrients: [],
    }
    this.popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{this.state.foodName}</Popover.Title>
        <Popover.Content>
          {this.state.nutrients.map((nutrient) => {

          })}
          <strong>info1</strong><br/>
          info2
          info3
        </Popover.Content>
      </Popover>
    );
  }

  updatePopover(callback = ()=>{}) {
    this.popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{this.state.foodName}</Popover.Title>
        <Popover.Content>
          {this.state.nutrients.map((nutrient) => {
          })}
          <strong>info1</strong><br/>
          info2
          info3
        </Popover.Content>
      </Popover>
    );
    callback()
  }

  grabNutrientInfo() {
    // fetch();
    console.log('here now')
    this.setState({
      foodName: 'hellooofasdfa32'
    })
  }

  render() {
    return (
      <Style.CurrentFoods>
        <Style.CurrentFoodsButtons>
          <Button style={{background: "#49b9d3", border: "none"}} onClick={this.props.handleSearch}>QUERY</Button>
          <Button style={{background: 'none', color: 'black', border: "none"}} onClick={this.props.clearFoods}>Clear All</Button>
        </Style.CurrentFoodsButtons>
        
        <Table striped bordered hover>
          <thead>
            <tr style={{background: "#ffeddf"}}>
              <td>Food Name</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.props.currentFoods.map((food, id) => {
              return (
                <tr key={id}>
                  <td>{food.food_name}</td>
                  <td>
                  <OverlayTrigger trigger="click" placement="right" overlay={this.popover}>
                    <Button variant="success" onClick={() => {this.grabNutrientInfo(food)}}>More Info</Button>
                  </OverlayTrigger>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Style.CurrentFoods>
  )
  }
}

export default CurrentFoods;