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
  const [computedColors, computedColorsSet] = useState(colors);
  // const [tooltipData, tooltipDataSet] = useState({ position: { x: 0, y: 0 } });
  // const [showTooltip, showTooltipSet] = useState(false);

  const data = {
    labels,
    _datasets: [
      {
        label: "Mittelherkunft",
        data: datapoints,
        backgroundColor: computedColors,
        hoverBackgroundColor: computedColors,
        borderWidth: 0,
        weight: 35,
      },
      {
        data: [100],
        backgroundColor: colors[activeArc.index],
        hoverBackgroundColor: colors[activeArc.index],
        borderWidth: 0,
        weight: activeArc.label ? 10 : 0,
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
    const elementIndex = elements[0].index;
    activeArcSet({
      label: labels[elementIndex],
      index: elementIndex,
    });
    computedColorsSet(
      colors.map((color, index) =>
        index === elementIndex ? color : `${color}40`
      )
    );
  };

  const onChartHover = (event, chartElement) => {
    if (chartElement[0]) {
      const index = chartElement[0].index;
      event.native.target.style.cursor = "pointer";
      //   if (index != tooltipData.index) {
      //     tooltipDataSet({
      //       index: index,
      //       position: chartElement[0].element.getCenterPoint(),
      //       value: datapoints[index],
      //       label: labels[index],
      //       color: colors[index],
      //     });
      //   }
      //   showTooltipSet(true);
      // } else {
      //   event.native.target.style.cursor = "default";
      //   showTooltipSet(false);
    }
  };

  const onClickIconClick = () => {
    activeArcSet({
      label: labels[0],
      index: 0,
    });
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
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
            <div className={cn.doner}>{activeArc.label}</div>
            <div className={cn.amount}>{datapoints[activeArc.index]} T€</div>
          </div>
        ) : (
          <div
            className={cx(cn.infoBox, cn.clickIcon)}
            onClick={onClickIconClick}
          >
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
