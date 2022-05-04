import { useEffect, useRef, useState } from "react";
import useStore from "../../hooks/useStore";
import cx from "classnames";
import LanguageSwitch from "../LanguageSwitch";

import cn from "./Navbar.module.scss";

import { ReactComponent as HinterDenKulissenIcon } from "../../icons/backstage.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/smart-city.svg";
import { ReactComponent as UnterwegsIcon } from "../../icons/on-the-way.svg";
import { ReactComponent as FrischerWind } from "../../icons/fresh-air.svg";
import { ReactComponent as StadtUndWir } from "../../icons/city-and-us.svg";

const icons = {
  smartCity: {
    icon: <SmartCityIcon />,
    width: 30,
    offset: 0,
  },
  frischerWind: {
    icon: <FrischerWind />,
    width: 30,
    offset: 50,
  },
  stadtUndWir: {
    icon: <StadtUndWir />,
    width: 30,
    offset: 100,
  },
  unterwegs: {
    icon: <UnterwegsIcon />,
    width: 30,
    offset: 200,
  },
  hinterDenKulissen: {
    icon: <HinterDenKulissenIcon />,
    width: 30,
    offset: 150,
  },
};

const activeTopicSelector = s => s.activeTopic;

function Navbar({ items, lang }) {
  const [activeLabel, setActiveLabel] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const elementRef = useRef(null);
  const activeTopic = useStore(activeTopicSelector);

  function handleMouseEnter({ label, id }) {
    setActiveId(id);
    setActiveLabel(label);
    setIsHovered(true);
  }

  useEffect(() => {
    if (activeId) {
      const label = document.getElementById("labelWrapper");
      const boundingLabel = label.getBoundingClientRect();
      const x = -(boundingLabel.width / 2) + 20 + icons[activeId].offset;
      label.style.transform = `translate(${x}px, -50px)`;
    }
  }, [activeLabel, activeId]);

  function handleMouseLeave() {
    setIsHovered(false);
    setActiveLabel(null);
  }

  function handleClick(id) {
    document
      .getElementById(`anchor-${id}`)
      .scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveLabel(null);
    setIsHovered(false);
  }
  console.log(activeLabel);
  return (
    <>
      <div className={cn.navbar}>
        <div
          id='labelWrapper'
          className={cx(cn.labelWrapper, { [cn.active]: isHovered })}
        >
          {activeLabel}
        </div>
        {items.map((d, i) => (
          <div key={`item-key-${i}`}>
            <div
              ref={elementRef}
              id={d.id}
              onMouseLeave={() => handleMouseLeave()}
              onMouseEnter={() =>
                handleMouseEnter({ id: d.id, label: d.topic[lang] })
              }
              onClick={() => handleClick(d.scrollId)}
              className={cx(cn.iconWrapper, cn[d.id], {
                [cn.active]: activeTopic === d.scrollId,
              })}
            >
              {icons[d.id].icon}
            </div>
          </div>
        ))}
        <div className={cn.divider} />
        <LanguageSwitch />
      </div>
    </>
  );
}

export default Navbar;
