import cn from "./Timeline.module.scss";

import Timestamp from "./Timestamp";

function Timeline({ items, lang }) {
  return (
    <div className={cn.timneline}>
      <div className={cn.lineDashed} />
      <div className={cn.lineWrapper}>
        <div className={cn.lineSolid} />
        <div className={cn.itemWrapper}>
          {items.map((item, index) => (
            <Timestamp key={index} index={index} data={item} lang={lang} />
          ))}
        </div>
      </div>
      <div className={cn.lineDashed} />
    </div>
  );
}

export default Timeline;
