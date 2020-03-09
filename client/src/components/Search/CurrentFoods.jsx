import React from 'react';
import Button from '@material-ui/core/Button';
import Style from '../../styled-components/Wrapper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Popover from '@material-ui/core/Popover';


class CurrentFoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '',
      nutrients: [],
    }
  }

  updatePopover(callback = ()=>{}) {
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
          <Button style={{background: "#49b9d3", border: "none", color: 'white'}} onClick={this.props.handleSearch}>Add Food</Button>
          <FormControlLabel
            control={
              <Switch style={{color: "#49b9d3"}}checked={this.props.clearPrevSearch} onChange={this.props.handleAddSwitch} value="clearPrevSearch" color='primary'/>
            }
            label="Clear on Search"
          />
          <Button style={{background: 'none', color: 'black', border: "none"}} onClick={this.props.clearFoods}>Clear All</Button>
        </Style.CurrentFoodsButtons>
        <TableContainer style={{ marginTop: '10px'}} component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{background: '#ffeddf'}}>
                <TableCell><strong>Food</strong></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.currentFoods.map((food, id) => {
                return (
                  <TableRow hover key={id}>
                    <TableCell>{food.food_name}</TableCell>
                    <TableCell>
                    {/* <Popover
                      id="mouse-over-popover"
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography>I use Popover.</Typography>
                    </Popover> */}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Style.CurrentFoods>
  )
  }
}

export default CurrentFoods;