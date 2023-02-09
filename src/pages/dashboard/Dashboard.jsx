import React from "react";
import "./Dashboard.css";
import info from '../../info.json';
import Card from "../../components/card/Card";
import { FaUsers } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  return (
    <div className="bg-page">
      <div className="cards-section">
        <Card card_name="Customers" card_value="100" card_icon={<FaUsers />} />
        <Card
          card_name="Orders"
          card_value="360"
          card_icon={<HiShoppingCart />}
        />
        <Card
          card_name="Revenue"
          card_value="58,000"
          card_icon={<RiMoneyDollarCircleFill />}
        />
      </div>
      <div className="chart-section">
        <BarChart
          className="bar-chart"
          width={1000}
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
            fill="rgb(24, 24, 44)"
            background={{ fill: "azure" }}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
