import { useEffect, useRef, useState } from "react";
import useStore from "../../hooks/useStore";
import cx from "classnames";
import LanguageSwitch from "../LanguageSwitch";

import cn from "./Navbar.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologien } from "../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as Kultur } from "../../icons/Nav-Icon-Kultur.svg";

const icons = {
  smartCity: {
    icon: <SmartCityIcon />,
    width: 30,
    offset: 0,
  },
  neueTechnologien: {
    icon: <NeueTechnologien />,
    width: 30,
    offset: 50,
  },
  kultur: {
    icon: <Kultur />,
    width: 30,
    offset: 100,
  },
  reallabor: {
    icon: <ReallaborIcon />,
    width: 30,
    offset: 200,
  },
  bildung: {
    icon: <BildungIcon />,
    width: 30,
    offset: 150,
  },
};

const activeTopicSelector = s => s.activeTopic;

const hideNav = sections => {
  const positions = getScrollPositionsOfSections(sections);
  console.log(
    positions.firstSectionPosition < 0 && positions.lastSectionEndPosition > 0
  );
  return (
    positions.firstSectionPosition < 0 && positions.lastSectionEndPosition > 0
  );
};

const getScrollPositionsOfSections = sections => {
  const firstSection = document.getElementById(
    `section-${sections[0].scrollId}`
  );
  const lastSection = document.getElementById(
    `section-${sections[sections.length - 1].scrollId}`
  );

  const firstSectionPosition = firstSection.getBoundingClientRect().top;
  const lastSectionEndPosition =
    lastSection.getBoundingClientRect().top + lastSection.clientHeight;

  return { firstSectionPosition, lastSectionEndPosition };
};

function Navbar({ items, lang }) {
  const [activeLabel, setActiveLabel] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", () => setIsVisible(hideNav(items)));
    return () =>
      window.removeEventListener("scroll", () => setIsVisible(hideNav(items)));
  });

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

  return (
    <>
      <div
        className={cx(cn.navbar, { [cn.navbarHidden]: !isVisible })}
        style={{ position: isVisible ? "fixed" : "none" }}
      >
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
