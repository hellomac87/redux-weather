import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

class WeatherListContainer extends Component {
  render() {
    const { weather } = this.props;
    console.log(weather);
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
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
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
