import React from "react";
import "./Dashboard.css";
import Card from "../../components/card/Card";
import BarChartSection from "../../components/bar-chart/BarChartSection";
import PieChartSection from "../../components/pie-chart/PieChartSection";

//icons:
import { FaUsers } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="bg-page">
      <h1 className="dashboard-title">Business Analytics</h1>
      <hr />
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
      <hr />
      <div className="chart-section">
        <BarChartSection />
        <PieChartSection />
      </div>
    </div>
  );
};

export default Dashboard;
