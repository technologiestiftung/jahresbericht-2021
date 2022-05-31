import { labels, datapoints, colors } from "../data";
import cn from "./Legend.module.scss";
import cx from "classnames";

const Legend = () => {
  return (
    <div>
      <ul className={cn.list}>
        {labels.map((label, index) => (
          <li key={index} className={cn.listItem}>
            <div
              className={cx(cn.colorBox, cn.left)}
              style={{ backgroundColor: colors[index] }}
            ></div>
            <strong className={cx(cn.amount, cn.center)}>
              {datapoints[index]} T€
            </strong>
            <span className={cx(cn.label, cn.right)}>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
