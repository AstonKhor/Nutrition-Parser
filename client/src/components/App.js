import React from 'react';
import SideBar from './SideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sections = ['DashBoard', 'Analytics', 'Shipments', 'Membership', 'Settings', 'Help'];
    this.state = {
      username: 'Guest',
      currentFoods: [],
      sectionSelect: 'Analytics',
    }
  }

  render() {
    return (
      <div>
        <SideBar sections={this.sections} selected={this.state.sectionSelect}/>
        <div>
          Main Section
        </div>
      </div>
    )
  }
}

export default App;