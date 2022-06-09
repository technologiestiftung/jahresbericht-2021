import { useState } from "react";
import cn from "./Development.module.scss";
import Navigation from "./Navigation";
import Slide from "./Slide";

import { departmentList, departments } from "./data";

const Development = () => {
  const [indexActive, indexActiveSet] = useState(0);

  return (
    <div className={cn.developmentConsole}>
      <Navigation indexActive={indexActive} indexActiveSet={indexActiveSet} />
      <div
        className={cn.contentSlider}
        style={{
          transform: `translateX(${
            departments[departmentList[indexActive]].slideOffset
          }px)`,
        }}
      >
        {departmentList.map((_, i) => (
          <Slide key={i} department={departments[departmentList[i]]} />
        ))}
      </div>
    </div>
  );
};

export default Development;
