import cn from "./Development.module.scss";
import Navigation from "./Navigation";

const Development = ({ data }) => {
  return (
    <div className={cn.development}>
      <h1>Unsere Entwicklung</h1>
      <div className={cn.console}>
        <Navigation />
        <div className={cn.contentSlider}>
          <div className={cn.slide}></div>
        </div>
      </div>
    </div>
  );
};

export default Development;
