import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip as Tool } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import cn from "./PieChart.module.scss";
import cx from "classnames";
import { labels, datapoints, colors, overview } from "./data";
import { ReactComponent as ClickIcon } from "../../icons/Click-Here.svg";
import Overview from "./Overview";

ChartJS.register(ArcElement, Tool);

const PieChart = () => {
  const [activeArc, activeArcSet] = useState({});
  const [computedColors, computedColorsSet] = useState(colors);
  const [onMobile, onMobileSet] = useState(window.innerWidth < 840);

  useEffect(() => {
    window.addEventListener("resize", () =>
      onMobileSet(window.innerWidth < 840)
    );
    return () =>
      window.removeEventListener("resize", () =>
        onMobileSet(window.innerWidth < 840)
      );
  });

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

  const activateArc = elementIndex => {
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

  const deactivateArcs = () => {
    activeArcSet({});
    computedColorsSet(colors);
  };

  const onChartClick = (_, elements) => {
    if (elements[0]) {
      const elementIndex = elements[0].index;
      const dataSet = elements[0].datasetIndex;
      if (activeArc.index === elementIndex || dataSet === 1) {
        deactivateArcs();
      } else {
        activateArc(elementIndex);
      }
    }
  };

  const onChartHover = (event, elements) => {
    if (elements[0]) {
      event.native.target.style.cursor = "pointer";
      const elementIndex = elements[0].index;
      const dataSet = elements[0].datasetIndex;
      if (activeArc.index !== elementIndex && dataSet === 0) {
        activateArc(elements[0].index);
      }
    } else {
      event.native.target.style.cursor = "default";
      if (activeArc.index) {
        deactivateArcs();
      }
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
    onClick: onMobile ? (_, elements) => onChartClick(_, elements) : () => {},
    onHover: onMobile ? () => {} : (e, elements) => onChartHover(e, elements),
    cutout: "55%",
  };

  return (
    <div className={cn.wrapper}>
      <div className={cn.doughnutWrapper}>
        <Doughnut data={data} options={options} />
        {activeArc.label ? (
          <div className={cn.infoBox}>
            <div className={cn.doner}>{activeArc.label}</div>
            <div>{datapoints[activeArc.index]} T€</div>
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
    </div>
  );
};

export default PieChart;
