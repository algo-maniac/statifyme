"use client";

import { useEffect, useState } from "react";
import { Data } from "@/assets/Data";
import {
  A_Submissions,
  B_Submissions,
  C_Submissions,
  D_Submissions,
} from "@/assets/SubmissionData";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

export default function App() {
  const [lineChartUser, setLineChartUser] = useState({
    labels: [
      "Jan 2022",
      "Feb 2022",
      "Mar 2022",
      "Apr 2022",
      "May 2022",
      "Jun 2022",
      "Jul 2022",
      "Aug 2022",
      "Sep 2022",
      "Oct 2022",
      "Nov 2022",
      "Dec 2022",
      "Jan 2023",
      "Feb 2023",
      "Mar 2023",
      "Apr 2023",
      "May 2023",
      "Jun 2023",
      "Jul 2023",
      "Aug 2023",
      "Sep 2023",
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
    ],
    datasets: [
      {
        label: "User count over time",
        data: [
          500, 600, 800, 1000, 1200, 1500, 1800, 2000, 2200, 2500, 2700, 3000,
          3200, 3500, 3800, 4000, 4200, 4500, 4800, 5000, 4800, 5500, 6000,
          7000, 9000, 20000,
        ],
        backgroundColor: ["#070331"],
        borderColor: "#070331",
        borderWidth: 2,
        barThickness: 30,
        borderRadius: 5,
      },
    ],
  });

  const options = {
    scales: {
      x: {
        ticks: {
          color: "#070331", // Change x-axis text color here
        },
      },
      y: {
        ticks: {
          color: "#070331", // Change y-axis text color here
        },
      },
    },
  };

  const [pieChartQualification, setPieChartQualification] = useState({
    labels: ["B. Tech", "B. Com", "Arts", "MCA", "M. Tech"],
    datasets: [
      {
        label: "Degree",
        data: [2800, 2000, 1800, 1500, 500],
        backgroundColor: ["red", "green", "blue", "yellow", "pink"],
        borderColor: ["red", "green", "blue", "yellow", "pink"],
        borderWidth: 2,
        barThickness: 30,
        borderRadius: 5,
      },
    ],
  });

  const [barChartAge, setBarChartAge] = useState({
    labels: ["0 - 20", "21 - 40", "41 - 60", "61 - 80", "80 +"],
    datasets: [
      {
        label: "User Count in the age range",
        data: [2800, 2000, 1800, 1500, 500],
        backgroundColor: ["#070331"],
        borderColor: "#070331",
        borderWidth: 2,
        barThickness: 30,
        borderRadius: 5,
      },
    ],
  });

  const [pieChartGender, setPieChartGender] = useState({
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender Count",
        data: [2800, 2000],
        backgroundColor: ["blue", "pink"],
        borderColor: ["blue", "pink"],
        borderWidth: 2,
        barThickness: 30,
        borderRadius: 5,
      },
    ],
  });

  return (
    <div className="my-10 w-[70%] flex flex-col mx-auto">
      <div className="flex flex-col my-10 items-center">
        <div>User Count Chart</div>
        <LineChart chartData={lineChartUser} options={options} />
      </div>

      <div className="flex flex-col my-10 items-center">
        <div>Age Chart</div>
        <BarChart chartData={barChartAge} />
      </div>

      <div className="flex justify-between md:flex-row flex-col items-center">
        <div className="flex flex-col my-10 items-center w-[40%]">
          <div>Gender Chart</div>
          <PieChart chartData={pieChartGender} />
        </div>

        <div className="flex flex-col my-10 items-center w-[40%]">
          <div>Qualification Chart</div>
          <PieChart chartData={pieChartQualification} />
        </div>
      </div>
    </div>
  );
}
