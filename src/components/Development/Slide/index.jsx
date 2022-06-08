import cn from "./Slide.module.scss";

const Slide = ({ department }) => {
  return (
    <div className={cn.slide}>
      <h2 className={cn.title}>Bereich {department.label}</h2>
    </div>
  );
};

export default Slide;
