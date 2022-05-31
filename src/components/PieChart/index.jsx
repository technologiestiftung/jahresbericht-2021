import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import cn from "./PieChart.module.scss";
import { labels, datapoints, colors } from "./data";
import Legend from "./Legend";

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels,
  datasets: [
    {
      label: "Mittelherkunft Jahr 2021",
      data: datapoints,
      backgroundColor: colors,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: "65%",
};

const PieChart = () => {
  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>{data.datasets[0].label.toUpperCase()}</h1>
      <Doughnut data={data} options={options} />
      <Legend />
    </div>
  );
};

export default PieChart;
