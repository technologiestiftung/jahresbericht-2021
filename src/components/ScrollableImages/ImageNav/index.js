import useStore, { useImageGroupStore } from "../../../hooks/useStore";
import cx from "classnames";

import cn from "./ImageNav.module.scss";

const langSelector = s => s.lang;
const activeSelector = s => s.active;
const setActiveSelector = s => s.setActive;

function ImageNav({ images, theme }) {
  const lang = useStore(langSelector);
  const active = useImageGroupStore(activeSelector);
  const setActive = useImageGroupStore(setActiveSelector);

  function handleClick(id) {
    setActive(id);
    document
      .getElementById(`anchor-${id}`)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className={cx(cn.wrapper, cn[theme])}>
      {images.map(d => (
        <div className={cn.bubbleWrapper} key={d.id}>
          <span className={cn.label}>{d.text.title[lang]}</span>
          <div
            className={cx(cn.bubble, { [cn.active]: d.id === active })}
            onClick={() => handleClick(d.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageNav;
