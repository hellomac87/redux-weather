import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleInputChange = e => {
    const term = e.target.value;
    this.setState({
      term
    });
  };

  onFormSubmit = e => {
    const { term } = this.state;
    const { fetchWeather } = this.props;
    e.preventDefault();

    // we need to go fetch weather data;
    fetchWeather(term);
    this.setState({
      term: ""
    });
  };
  render() {
    const { term } = this.state;

    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <Input
          value={term}
          onChange={e => this.handleInputChange(e)}
          type="text"
          focus
          placeholder="Search..."
        />
        <Button primary type="submit">
          submit
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchWeather
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);
