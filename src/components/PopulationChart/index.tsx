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
import { useChartData } from "../../state/chartData";
import { randomColor } from "../../utils/randomColor";

export const PopulationChart: React.VFC = () => {
  const chartData = useChartData();

  return (
    <ResponsiveContainer width="95%" aspect={1.6}>
      <LineChart
        data={chartData}
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
        {chartData[0] &&
          Object.keys(chartData[0]).map(
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
