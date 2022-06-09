import cn from "./Navigation.module.scss";
import cx from "classnames";
import { departmentList, departments } from "../data";

const Navigation = ({ indexActive, indexActiveSet }) => {
  return (
    <div className={cn.navigation}>
      {departmentList.map((_, index) => (
        <div
          key={index}
          className={cx(cn.icon, {
            [cn.active]: indexActive === index,
          })}
          onClick={() => indexActiveSet(index)}
        >
          {departments[departmentList[index]].component}
        </div>
      ))}
      <div className={cn.underlineContainer}>
        <div
          className={cn.underline}
          style={{
            transform: `translateX(${
              departments[departmentList[indexActive]].navOffset
            }px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navigation;
