import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { randomColor } from "../utils/randomColor";
import { ChartData } from "../logics/entites";

export const PopulationChart: React.FC<{ data: ChartData[] }> = props => {
  return (
    <ResponsiveContainer width="95%" aspect={1.6}>
      <LineChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 20,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis yAxisId="left" />
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: "calc(6px + 2vmin)" }} />
        {props.data[0] &&
          Object.keys(props.data[0]).map(
            d =>
              d !== "year" && (
                <Line
                  key={d}
                  yAxisId="left"
                  type="monotone"
                  dataKey={d}
                  stroke={randomColor()}
                />
              ),
          )}
      </LineChart>
    </ResponsiveContainer>
  );
};
