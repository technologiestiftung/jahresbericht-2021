import cn from "./Slide.module.scss";
import { useState, useEffect, useRef } from "react";
import YearNav from "../YearNav";

const Slide = ({ department }) => {
  const [activeYear, activeYearSet] = useState(0);
  const [runInterval, runIntervalSet] = useState(true);
  const slideWidth = 289 + 18;
  let yearInterval = useRef(null);

  const yearSwitchHandler = index => {
    activeYearSet(index);
    runIntervalSet(false);
  };

  useEffect(() => {
    if (runInterval) {
      yearInterval.current = setInterval(() => {
        if (activeYear === department.years.length - 1) {
          activeYearSet(0);
        } else {
          activeYearSet(activeYear + 1);
        }
      }, 1500);
      return () => clearInterval(yearInterval.current);
    }
  }, [activeYear, runInterval]);

  return (
    <div className={cn.slide}>
      <h2 className={cn.title}>Bereich {department.label}</h2>
      <div
        className={cn.projectWrapper}
        style={{
          transform: `translateX(-${activeYear * slideWidth}px)`,
        }}
      >
        {department.years.map((year, index) => (
          <div className={cn.projectColumn} key={year + index}>
            {department.projectsPerYear[year].map((project, index) => (
              <div className={cn.projectBubble} key={project + index}>
                {project}
              </div>
            ))}
          </div>
        ))}
      </div>
      <YearNav
        years={department.years}
        activeYear={activeYear}
        activeYearSet={yearSwitchHandler}
      />
    </div>
  );
};

export default Slide;
