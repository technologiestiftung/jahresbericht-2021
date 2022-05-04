import useStore, { useImageGroupStore } from "../../hooks/useStore";
import { useMemo, useState } from "react";
import cx from "classnames";

import cn from "./ScrollableImages.module.scss";

import ImageGroup from "./ImageGroup";
// import ImageNav from './ImageNav';
import Tile from "./Tile";
// import Button from '../Button';
import Link from "../Link";
import Funfact from "../Funfact";

const langSelector = s => s.lang;
const activeSelector = s => s.active;

function ScrollableImages({ content, ui }) {
  const { items, topic } = content;

  const lang = useStore(langSelector);
  const active = useImageGroupStore(activeSelector);
  const [lastActiveItem, setLastActiveItem] = useState(items[0].id);

  const activeItem = useMemo(() => {
    const matched = items.find(d => d.id === active);
    if (matched) setLastActiveItem(matched);
    return matched ? matched : lastActiveItem;
  }, [active, items, lastActiveItem]);

  return (
    <div className={cn.scrollContainer}>
      <ImageGroup activeItem={activeItem} images={items} />
      {/* <ImageNav theme={activeItem.theme}  images={items} /> */}
      {items.map(d => (
        <div key={d.id} className={cn.tileWrapper}>
          <Tile align={d.align} theme={d.theme} id={d.id}>
            <div className={cx(cn.topline, cn[d.theme])}>
              <span className={cn.id}>{d.id}</span>
              <span className={cn.label}>{topic[lang]}</span>
            </div>
            <h3
              className={cn.title}
              dangerouslySetInnerHTML={{ __html: d.text.title[lang] }}
            />
            <p
              className={cn.text}
              dangerouslySetInnerHTML={{ __html: d.text.paragraph[lang] }}
            ></p>
            {d.text.funfact && <Funfact content={d.text.funfact} lang={lang} />}
            {d.text?.links?.length > 0 && (
              <h3 className={cn.subtitle}>{ui.moreLinks[lang]}</h3>
            )}
            {d.text?.links?.length > 0 && (
              <div className={cn.linkWrapper}>
                <>
                  {d.text?.links.map((link, i) => (
                    <Link
                      key={`link-key-${i}`}
                      theme={d.theme}
                      content={link}
                      lang={lang}
                    />
                  ))}
                </>
              </div>
            )}
            {/* <Button theme={d.theme} to={d.text.link} label={ui.btnProject[lang]}/> */}
          </Tile>
        </div>
      ))}
    </div>
  );
}

export default ScrollableImages;
