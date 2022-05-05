import { useState, useRef } from "react";

import cn from "./Accordion.module.scss";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

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
        style={
          active
            ? { maxHeight: panelEl.current.scrollHeight + 30 }
            : { maxHeight: "0px" }
        }
      >
        <p
          ref={panelEl}
          className={cn.paragraph}
          dangerouslySetInnerHTML={{ __html: content[lang] }}
        ></p>
      </div>
    </div>
  );
}

export default Accordion;
