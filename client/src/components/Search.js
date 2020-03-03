import React from 'react';
import SideBar from './SideBar';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>
    )
  }
}

export default Search;