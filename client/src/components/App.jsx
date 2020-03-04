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
    this.fakeNutrientData = ['nut1', 'nut2', 'sugar'];
    this.state = {
      username: 'Guest',
      queries: [],
      currentFoods: [],
      sectionSelected: 'Search Foods',
    }
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.addQuery = this.addQuery.bind(this);
    this.clearQueries = this.clearQueries.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    //make request to server for list of nutrients or have them locally available
    fetch('/foods')
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        
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
    let queriesCopy = [newQuery];
    for (let i = 0; i < this.state.queries.length; i++) {
      queriesCopy[i + 1] = {
        nutrient: this.state.queries[i].nutrient,
        operation: this.state.queries[i].operation,
        weight: this.state.queries[i].weight,
      };
    }
    //add ability to avoid duplicates
    this.setState({
      queries: queriesCopy
    })
  }

  clearQueries() {
    this.setState({
      queries: []
    })
  }

  handleSearch() {
    //add all the query info into the request
    fetch('/foods')
      .then((response) => response.json())
      .then((data) => {
        //parse the data then set state with it.
        // this.setState()
      })
  }

  renderSelection() {
    if (this.state.sectionSelected === 'DashBoard') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Analytics') {
      return <FutureComponentTemplate/>
    } else if (this.state.sectionSelected === 'Search Foods') {
      return <Search nutrients={this.fakeNutrientData} queries={this.state.queries} addQuery={this.addQuery} clearQueries={this.clearQueries} handleSearch={this.handleSearch}/>
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