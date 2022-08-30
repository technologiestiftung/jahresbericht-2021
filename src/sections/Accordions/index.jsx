import { useState } from "react";
import cx from "classnames";
import cn from "./Accordions.module.scss";
import Accordion from "../../components/Accordion";

function Accordions({ accordionItems, lang }) {
  const [accordionsOpen, accordionsOpenSet] = useState(
    accordionItems.map(() => 0)
  );

  return (
    <section className={cx(cn.layoutWrapper, cn.wrapper)}>
      {accordionItems.map((item, index) => (
        <Accordion
          key={index}
          index={index}
          lang={lang}
          title={item.title[lang]}
          content={item}
          accordionsOpen={accordionsOpen}
          accordionsOpenSet={accordionsOpenSet}
        />
      ))}
    </section>
  );
}

export default Accordions;
