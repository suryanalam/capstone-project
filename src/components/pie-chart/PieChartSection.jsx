import React from "react";
import "./PieChartSection.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "percentage",
      data: [25, 40, 20, 15],
      backgroundColor: ["rgba(2, 12, 27, 0.5)"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
  labels: ["Marketing", "Products", "Customers", "Revenue"],
};

function PieChartSection() {
  return (
    <div className="doughnut-chart">
      <Doughnut data={data} />
    </div>
  );
}

export default PieChartSection;
