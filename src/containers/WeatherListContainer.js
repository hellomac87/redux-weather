import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

class WeatherListContainer extends Component {
  renderWeather = cityData => {
    const {
      city: { id, name },
      list
    } = cityData;

    const temps = list.map(l => l.main.temp);
    const pressures = list.map(l => l.main.pressure);
    const humidities = list.map(l => l.main.humidity);

    return (
      <Table.Row key={id}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>
          <Chart data={temps} units="K" color="#00ff9f" />
        </Table.Cell>
        <Table.Cell>
          <Chart data={pressures} units="hPa" color="#001eff" />
        </Table.Cell>
        <Table.Cell>
          <Chart data={humidities} units="%" color="#d600ff" />
        </Table.Cell>
      </Table.Row>
    );
  };

  renderTempChart = (list, option) => {
    const arr = list.map(l => {
      return l.main[option];
    });
    return arr;
  };

  render() {
    const { weather } = this.props;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature (K)</Table.HeaderCell>
            <Table.HeaderCell>Pressure (hPa)</Table.HeaderCell>
            <Table.HeaderCell>Humidity (%)</Table.HeaderCell>
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
