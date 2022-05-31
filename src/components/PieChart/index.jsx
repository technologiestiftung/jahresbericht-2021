import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import cn from "./PieChart.module.scss";
import { labels, datapoints, colors } from "./data";
import Legend from "./Legend";

ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const [activeArc, activeArcSet] = useState({});

  const data = {
    labels,
    datasets: [
      {
        label: "Mittelherkunft Jahr 2021",
        data: datapoints,
        backgroundColor: colors,
      },
    ],
  };

  const onChartClick = (_, elements) => {
    const index = elements[0].index;
    activeArcSet({
      label: labels[index],
    });
  };

  const onChartHover = (event, chartElement) => {
    event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    events: ["click", "mousemove"],
    onClick: (_, elements) => onChartClick(_, elements),
    onHover: (e, el) => onChartHover(e, el),
    cutout: "65%",
  };

  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>{data.datasets[0].label.toUpperCase()}</h1>
      <div className={cn.doughnutWrapper}>
        <Doughnut data={data} options={options} />
        {activeArc && <div className={cn.infoBox}>{activeArc.label}</div>}
      </div>
      <Legend />
    </div>
  );
};

export default PieChart;
