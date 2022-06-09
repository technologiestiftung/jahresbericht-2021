import cn from "./YearNav.module.scss";
import cx from "classnames";

const YearNav = ({ years, activeYear, activeYearSet }) => {
  return (
    <div className={cn.nav}>
      {years.map((year, index) => (
        <div
          key={index}
          className={cx(cn.year, { [cn.active]: index === activeYear })}
          onClick={() => activeYearSet(index)}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearNav;
