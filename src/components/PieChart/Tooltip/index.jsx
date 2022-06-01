// import useMousePosition from "../../../hooks/useMousePosition";
import cn from "./Tooltip.module.scss";
import cx from "classnames";

const Tooltip = ({ data }) => {
  //const { x, y } = useMousePosition();

  return (
    <div
      style={{
        position: "fixed",
        left: `${data.position.x}px`,
        top: `${data.position.y}px`,
        border: `solid 2px ${data.color}`,
      }}
    >
      <div className={cn.tooltip}>
        <div>
          <strong>{data.value} T€</strong>
          <span>{data.label}</span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
