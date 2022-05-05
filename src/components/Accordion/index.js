import cn from "./Accordion.module.scss";

import { useState } from "react";

import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

function Accordion() {
  const [active, setActive] = useState(false);

  return (
    <div className={cn.accordion}>
      <div className={cn.clickable} onClick={() => setActive(!active)}>
        <p>Accordion</p>
        {active ? <MinusIcon /> : <PlusIcon />}
      </div>
    </div>
  );
}

export default Accordion;
