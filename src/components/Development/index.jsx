import cn from "./Development.module.scss";
import Navigation from "./Navigation";
import Slide from "./Slide";

import { departments } from "./data";

const Development = ({ data }) => {
  return (
    <div className={cn.development}>
      <h1>Unsere Entwicklung</h1>
      <div className={cn.console}>
        <Navigation departments={departments} />
        <div className={cn.contentSlider}>
          {departments.map((d, i) => (
            <Slide key={i} department={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Development;
