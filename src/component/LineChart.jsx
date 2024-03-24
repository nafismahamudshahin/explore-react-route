
import { LineChart, Line } from "recharts";
const LineCharts = () => {
  const data = [
    {name: 'shahin', uv: 400, pv: 2400, amt: 2400},
    {name: 'rakib', uv: 460, pv: 2400, amt: 2400},
    {name: 'rimon', uv: 243, pv: 2400, amt: 2400},
    {name: 'rizve', uv: 599, pv: 2400, amt: 2400},
    {name: 'syam', uv: 434, pv: 2400, amt: 2400},

];

  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="red" />
        <Line type="monotone" dataKey="pv" stroke="red" />
        <Line type="monotone" dataKey="amt" stroke="red" />
      </LineChart>
    </div>
  );
};

export default LineCharts;