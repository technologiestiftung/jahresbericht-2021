import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip as Tool } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import cn from "./PieChart.module.scss";
import { labels, datapoints, colors } from "./data";
import Legend from "./Legend";
// import Tooltip from "./Tooltip";

ChartJS.register(ArcElement, Tool);

const PieChart = () => {
  const [activeArc, activeArcSet] = useState({});
  const [showTooltip, showTooltipSet] = useState(false);
  const [tooltipData, tooltipDataSet] = useState({ position: { x: 0, y: 0 } });

  const data = {
    labels,
    _datasets: [
      {
        label: "Mittelherkunft Jahr 2021",
        data: datapoints,
        backgroundColor: colors,
      },
    ],
    get datasets() {
      return this._datasets;
    },
    set datasets(value) {
      this._datasets = value;
    },
  };

  const onChartClick = (_, elements) => {
    const index = elements[0].index;
    activeArcSet({
      label: labels[index],
      index,
    });
  };

  const onChartHover = (event, chartElement) => {
    if (chartElement[0]) {
      const index = chartElement[0].index;
      event.native.target.style.cursor = "pointer";
      if (index != tooltipData.index) {
        tooltipDataSet({
          index: index,
          position: chartElement[0].element.getCenterPoint(),
          value: datapoints[index],
          label: labels[index],
          color: colors[index],
        });
      }
      showTooltipSet(true);
    } else {
      event.native.target.style.cursor = "default";
      showTooltipSet(false);
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
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
        {activeArc.label && (
          <div className={cn.infoBox}>
            <div>
              <strong>{datapoints[activeArc.index]} T€</strong>
            </div>
            <div>{activeArc.label}</div>
          </div>
        )}
      </div>
      <Legend />
      {/* {showTooltip && <Tooltip data={tooltipData} />} */}
    </div>
  );
};

export default PieChart;
