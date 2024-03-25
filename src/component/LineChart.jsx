
import { LineChart, Line,XAxis,YAxis,CartesianGrid,Tooltip } from "recharts";
const LineCharts = () => {
  const data = [
    {name: 'shahin', uv: 400, pv: 2600, amt: 5400},
    {name: 'rakib', uv: 460, pv: 2400, amt: 2400},
    {name: 'rimon', uv: 243, pv: 2200, amt: 2400},
    {name: 'rizve', uv: 599, pv: 200, amt: 2400},
    {name: 'syam', uv: 434, pv: 1500, amt: 1300},
    {name: 'syam', uv: 434, pv: 1500, amt: 1300},
    {name: 'syam', uv: 434, pv: 1500, amt: 1300},

];

  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <XAxis name="name"/>
        <YAxis name="uv"/>
        <Line type="monotone" dataKey="uv" stroke="green" />
        {/* <Line type="monotone" dataKey="pv" stroke="white" /> */}
        <Line type="monotone" dataKey="amt" stroke="red" />
        <CartesianGrid strokeDasharray="3" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default LineCharts;