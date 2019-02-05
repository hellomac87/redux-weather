import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

const average = data => {
  return _.round(_.sum(data) / data.length);
};

const Chart = ({ data, color, units }) => {
  return (
    <React.Fragment>
      <Sparklines
        data={data}
        limit={5}
        width={100}
        height={20}
        margin={5}
        color={color}
      >
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </React.Fragment>
  );
};

export default Chart;
