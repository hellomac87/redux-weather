import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

class WeatherListContainer extends Component {
  renderWeather = cityData => {
    const {
      city: { id, name }
    } = cityData;
    return (
      <Table.Row key={id}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    );
  };

  render() {
    const { weather } = this.props;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Pressure</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {weather.length > 0 ? (
            weather.map(w => this.renderWeather(w))
          ) : (
            <Table.Row>
              <Table.Cell>search weather</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     weather: state.weather
//   };
// };

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(
  mapStateToProps,
  null
)(WeatherListContainer);
