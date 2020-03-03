import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: 'hello',
      data2: 'world'
    }
  }

  render() {
    return (
      <div>
        {this.state.data1} {this.state.data2} now rendering
      </div>
    )
  }
}

export default App;