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
      queries: [],
      currentFoods: [],
      sectionSelected: 'Search Foods',
    }
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.addQuery = this.addQuery.bind(this);
    this.clearParams = this.clearParams.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  addQuery(e) {
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
    let queriesCopy = [newQuery];
    for (let i = 0; i < this.state.queries.length; i++) {
      if (newQuery.nutrient === this.state.queries[i].nutrient &&newQuery.operation === this.state.queries[i].operation && newQuery.weight === this.state.queries[i].weight) {
        return;
      }
      queriesCopy[i + 1] = {
        nutrient: this.state.queries[i].nutrient,
        operation: this.state.queries[i].operation,
        weight: this.state.queries[i].weight,
      };
    }
    this.setState({
      queries: queriesCopy
    })
  }

  clearParams() {
    this.setState({
      queries: []
    })
  }

  handleSearch(e) {
    e.preventDefault();
    //add all the query info into the request
    let urlQuery = '?'
    let queries = this.state.queries;
    for (let i = 0; i < queries.length; i++) {
      urlQuery = urlQuery.concat(`query${i + 1}=${queries[i].nutrient};${queries[i].operation};${queries[i].weight}&`);
    }
    fetch(`/foods/search${urlQuery.slice(0, urlQuery.length - 1)}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //add to remaining data
        this.setState({
          currentFoods: data,
        })
      })
  }

  renderSelection() {
    if (this.state.sectionSelected === 'DashBoard') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Analytics') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Search Foods') {
      return <Search nutrients={this.state.nutrientData} queries={this.state.queries} addQuery={this.addQuery} clearParams={this.clearParams} handleSearch={this.handleSearch} currentFoods={this.state.currentFoods}/>
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
        <Header/>
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