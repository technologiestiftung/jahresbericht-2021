import cn from "./Slide.module.scss";
import { useState } from "react";
import YearNav from "../YearNav";

const Slide = ({ department }) => {
  const [activeYear, activeYearSet] = useState(0);
  const slideWidth = 289 + 18;

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
          <div className={cn.projectColumn} key={index}>
            {department.projectsPerYear[year].map((project, index) => (
              <div className={cn.projectBubble} key={index}>
                {project}
              </div>
            ))}
          </div>
        ))}
      </div>
      <YearNav
        years={department.years}
        activeYear={activeYear}
        activeYearSet={activeYearSet}
      />
    </div>
  );
};

export default Slide;
