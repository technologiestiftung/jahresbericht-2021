import { useRef } from "react";
import cx from "classnames";

import cn from "./Accordion.module.scss";

function Accordion({
  index,
  lang,
  title,
  content,
  accordionsOpen,
  accordionsOpenSet,
}) {
  const clickEl = useRef();
  const panelEl = useRef();
  const isOpen = accordionsOpen[index];

  const clickHandler = () => {
    if (isOpen) {
      accordionsOpenSet(accordionsOpen.map(() => 0));
    } else {
      accordionsOpenSet(
        accordionsOpen.map((_, accIndex) => (accIndex === index ? 1 : 0))
      );
      window.setTimeout(
        () =>
          clickEl.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          }),
        400
      );
    }
  };

  return (
    <div className={cn.accordion} id={`accordion-${index}`}>
      <div
        className={cn.clickable}
        onClick={e => clickHandler(e)}
        ref={clickEl}
      >
        <p className={cn.title}>{title}</p>
        <div
          className={cx(
            cn.plusMinusIcon,
            { [cn.minusIcon]: isOpen },
            { [cn.plusIcon]: !isOpen }
          )}
        >
          <div className={cn.bar}></div>
          <div className={cx(cn.bar, { [cn.verticalBar]: !isOpen })}></div>
        </div>
      </div>
      <div
        className={cn.panel}
        style={
          isOpen
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
