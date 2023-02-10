import React from "react";
import "./BarChartSection.css";
import info from "../../info.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartSection = () => {
  return (
    <BarChart
      className="bar-chart"
      width={600}
      height={300}
      data={info.data}
      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="1" />
      <XAxis dataKey="name" fill="rgb(24, 24, 44)" />
      <YAxis fill="rgb(24, 24, 44)" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="sales"
        fill="rgb(2, 12, 27)"
        background={{ fill: "slategray" }}
      />
    </BarChart>
  );
};

export default BarChartSection;
