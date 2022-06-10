import { useState, useRef } from "react";
import cx from "classnames";

import cn from "./Accordion.module.scss";

function Accordion({ lang, title, content }) {
  const [active, setActive] = useState(false);
  const panelEl = useRef();

  return (
    <div className={cn.accordion}>
      <div className={cn.clickable} onClick={() => setActive(!active)}>
        <p className={cn.title}>{title}</p>
        <div
          className={cx(
            cn.plusMinusIcon,
            { [cn.minusIcon]: active },
            { [cn.plusIcon]: !active }
          )}
        >
          <div className={cn.bar}></div>
          <div className={cx(cn.bar, { [cn.verticalBar]: !active })}></div>
        </div>
      </div>
      <div
        className={cn.panel}
        style={
          active
            ? { maxHeight: panelEl.current.scrollHeight + 30 }
            : { maxHeight: "0px" }
        }
      >
        <div ref={panelEl} className={cn.paragraph}>
          {content[lang].map((p, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
