import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Chart = ({ data, color }) => {
  return (
    <Sparklines
      data={data}
      limit={5}
      width={100}
      height={20}
      margin={5}
      color={color}
    >
      <SparklinesLine color={color} />
    </Sparklines>
  );
};

export default Chart;
