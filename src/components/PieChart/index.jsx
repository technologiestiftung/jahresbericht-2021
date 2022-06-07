import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip as Tool } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import cn from "./PieChart.module.scss";
import cx from "classnames";
import { labels, datapoints, colors, overview } from "./data";
import { ReactComponent as ClickIcon } from "../../icons/Click-Here.svg";
import Overview from "./Overview";
// import Legend from "./Legend";
// import Tooltip from "./Tooltip";

ChartJS.register(ArcElement, Tool);

const PieChart = () => {
  const [activeArc, activeArcSet] = useState({});
  const [tooltipData, tooltipDataSet] = useState({ position: { x: 0, y: 0 } });
  const [showTooltip, showTooltipSet] = useState(false);

  const data = {
    labels,
    _datasets: [
      {
        label: "Mittelherkunft",
        data: datapoints,
        backgroundColor: colors,
        borderWidth: 0,
        weight: 35,
      },
      {
        data: [100],
        backgroundColor: colors[0],
        hoverBackgroundColor: colors[0],
        weight: 0,
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
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    defaults: {
      plugins: {
        title: {
          display: false,
        },
      },
    },
    events: ["click", "mousemove"],
    onClick: (_, elements) => onChartClick(_, elements),
    onHover: (e, el) => onChartHover(e, el),
    cutout: "55%",
  };

  return (
    <div className={cn.wrapper}>
      <h1 className={cn.title}>{data.datasets[0].label.toUpperCase()}</h1>
      <p className={cn.subTitle}>
        Klicken Sie sich hier durch unsere Mittel und wo sie herkommen.
      </p>
      <div className={cn.doughnutWrapper}>
        <Doughnut data={data} options={options} />
        {activeArc.label ? (
          <div className={cn.infoBox}>
            <div>
              <strong>{datapoints[activeArc.index]} T€</strong>
            </div>
            <div>{activeArc.label}</div>
          </div>
        ) : (
          <div className={cx(cn.infoBox, cn.clickIcon)}>
            <ClickIcon />
          </div>
        )}
      </div>
      <Overview data={overview} />
      {/* <Legend /> */}
      {/* {showTooltip && <Tooltip data={tooltipData} />} */}
    </div>
  );
};

export default PieChart;
