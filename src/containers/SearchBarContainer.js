import React, { Component } from "react";

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleInput = term => {
    this.setState({
      term
    });
  };
  render() {
    const { term } = this.state;
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          value={term}
          onChange={e => this.handleInput(e.target.value)}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default SearchBarContainer;
