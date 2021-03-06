import React from 'react';
import SideBar from './SideBar/SideBar';
import Search from './Search/Search';
import Header from './Header/Header';
import FutureComponentTemplate from './FutureComponentTemplate/FutureComponentTemplate';
import Style from '../styled-components/Wrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sections = ['DashBoard', 'Analytics', 'Search Foods', 'Shipments', 'Membership', 'Settings', 'Help'];
    this.state = {
      nutrientData: [],
      username: 'Guest',
      params: [],
      currentFoods: [],
      sectionSelected: 'Search Foods',
      clearPrevSearch: true,
    }
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.addParam = this.addParam.bind(this);
    this.clearParams = this.clearParams.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.removeParam = this.removeParam.bind(this);
    this.clearFoods = this.clearFoods.bind(this);
    this.handleAddSwitch = this.handleAddSwitch.bind(this);
  }

  componentDidMount() {
    //make request to server for list of nutrients and have them locally available
    fetch('/nutrients')
      .then((response) => {
        return response.json()})
      .then((data) => {
        this.setState({
          nutrientData: data
        });
      })
  }

  handleNavSelect(e) {
    this.setState({
      sectionSelected: e.target.innerHTML
    })
  }

  addParam(e) {
    e.preventDefault();
    let newQuery = {
      nutrient: e.currentTarget.elements["nutrient"].value,
      operation: e.currentTarget.elements["operation"].value,
      weight: e.currentTarget.elements["weight"].value,
    };
    let nutrientHash = {};
    let duplicate = false;
    for (let i = 0; i < this.state.nutrientData.length; i++) {
      nutrientHash[this.state.nutrientData[i].nutrient_name] = true;
    }
    if (!nutrientHash[newQuery.nutrient]) {
      //alert of invalid query nutrient name
      //model?
      return ;
    }
    if (newQuery.weight === '') {
      //invalid query weight
      return;
    }
    e.currentTarget.elements["nutrient"].value = '';
    e.currentTarget.elements["operation"].value = 'less than';
    e.currentTarget.elements["weight"].value = '';
    let paramsCopy = [newQuery];
    for (let i = 0; i < this.state.params.length; i++) {
      if (newQuery.nutrient === this.state.params[i].nutrient &&newQuery.operation === this.state.params[i].operation && newQuery.weight === this.state.params[i].weight) {
        return;
      }
      paramsCopy[i + 1] = {
        nutrient: this.state.params[i].nutrient,
        operation: this.state.params[i].operation,
        weight: this.state.params[i].weight,
      };
    }
    this.setState({
      params: paramsCopy
    })
  }

  removeParam(removeIdx) {
    let paramsCopy = [];
    for (let i = 0; i < this.state.params.length; i++) {
      if (i !== removeIdx) {
        paramsCopy.push(this.state.params[i]);
      }
    }
    this.setState({
      params: paramsCopy
    })
  }

  clearParams() {
    this.setState({
      params: []
    })
  }

  clearFoods() {
    this.setState({
      currentFoods: []
    })
  }

  handleSearch(e) {
    e.preventDefault();
    //add all the query info into the request
    let urlQuery = '?'
    let params = this.state.params;
    for (let i = 0; i < params.length; i++) {
      urlQuery = urlQuery.concat(`query${i + 1}=${params[i].nutrient};${params[i].operation};${params[i].weight}&`);
    }
    fetch(`/foods/search${urlQuery.slice(0, urlQuery.length - 1)}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //grab specific data on each? or should this be done in the table?

        //add to remaining data
        if (this.state.clearPrevSearch) {
          this.setState({
            currentFoods: data,
          })
        } else {
          let currentFoodsCopy = [];
          for (let i = 0; i < this.state.currentFoods.length; i++) {
            currentFoodsCopy.push(Object.assign({}, this.state.currentFoods[i]));
          }
          for (let i = 0; i < data.length; i++) {
            currentFoodsCopy.push(data[i]);
          }
          this.setState({
            currentFoods: currentFoodsCopy
          })
        }
      })
  }

  handleAddSwitch() {
    this.setState({
      clearPrevSearch: !this.state.clearPrevSearch,
    })
  }

  renderSelection() {
    if (this.state.sectionSelected === 'DashBoard') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Analytics') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Search Foods') {
      return <Search nutrients={this.state.nutrientData} params={this.state.params} addParam={this.addParam} clearParams={this.clearParams} handleSearch={this.handleSearch} currentFoods={this.state.currentFoods} removeParam={this.removeParam} clearFoods={this.clearFoods} handleAddSwitch={this.handleAddSwitch} clearPrevSearch={this.state.clearPrevSearch}/>
    } else if (this.state.sectionSelected === 'Shipments') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Membership') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Settings') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Help') {
      return <FutureComponentTemplate/>
    }
  }

  render() {
    return (
      <div>
        <SideBar sections={this.sections} selected={this.state.sectionSelected} select={this.handleNavSelect}/>
        <Header section={this.state.sectionSelected}/>
        {/* <Style.Backlay/> */}
        <Style.Content>
          {/* {<top bar>} */}
          {this.renderSelection()}
        </Style.Content>
      </div>
    )
  }
}

export default App;