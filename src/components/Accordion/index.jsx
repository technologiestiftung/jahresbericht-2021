import { useState, useRef } from "react";

import cn from "./Accordion.module.scss";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import Paragraph from "../Paragraph";

function Accordion({ lang, title, content }) {
  const [active, setActive] = useState(false);
  const panelEl = useRef();

  return (
    <div className={cn.accordion}>
      <div className={cn.clickable} onClick={() => setActive(!active)}>
        <p className={cn.title}>{title}</p>
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
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
