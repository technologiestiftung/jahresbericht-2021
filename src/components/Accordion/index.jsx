import { useState, useRef } from "react";

import cn from "./Accordion.module.scss";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

function Accordion() {
  const [active, setActive] = useState(false);
  const panelEl = useRef();

  return (
    <div className={cn.accordion}>
      <div className={cn.clickable} onClick={() => setActive(!active)}>
        <p className={cn.title}>Accordion</p>
        {active ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div
        className={cn.panel}
        ref={panelEl}
        style={
          active
            ? { maxHeight: panelEl.current.scrollHeight }
            : { maxHeight: "0px" }
        }
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          quibusdam rerum, aliquid ipsa, ipsum laborum quaerat nulla nisi fugiat
          sit quas ad. Dolores, ullam doloribus praesentium necessitatibus
          maiores modi nesciunt et ea fugit saepe ducimus, dolor amet iusto
          veniam nihil ipsum eligendi vitae sint quis est dolorum enim. Libero,
          et.
        </p>
      </div>
    </div>
  );
}

export default Accordion;
