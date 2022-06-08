import cn from "./Navigation.module.scss";

const Navigation = ({ departments }) => {
  return (
    <div className={cn.navigation}>
      {departments.map((icon, index) => (
        <div key={index} className={cn.icon}>
          {icon.component}
        </div>
      ))}
      <div className={cn.underlineContainer}>
        <div className={cn.underline}></div>
      </div>
    </div>
  );
};

export default Navigation;
