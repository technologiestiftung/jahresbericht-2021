import { useRef, useEffect } from "react";
import cx from "classnames";

import cn from "./Tile.module.scss";

import useOnScreen from "../../../hooks/useOnScreen";
import { useImageGroupStore } from "../../../hooks/useStore";

const setActiveSelector = s => s.setActive;

function Tile({ children, id, theme, align }) {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  const setActive = useImageGroupStore(setActiveSelector);

  useEffect(() => {
    if (isOnScreen) {
      setActive(id);
    }
  }, [isOnScreen, id, setActive]);

  return (
    <div ref={elementRef} className={cx(cn.tile, cn[theme], cn[align])}>
      {children}
      <div className={cn.anchor} id={`anchor-${id}`}></div>
    </div>
  );
}

export default Tile;
