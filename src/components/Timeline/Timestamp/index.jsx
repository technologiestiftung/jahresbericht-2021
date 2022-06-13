import cn from "./Timestamp.module.scss";
import cx from "classnames";

import Paragraph from "../../Paragraph";

function Timestamp({ leftSide, data, lang }) {
  return (
    <div className={cx(cn.timestamp, { [cn.timestampLeft]: leftSide })}>
      <div className={cn.dot} />
      <div className={cn.connector} />
      <div className={cn.infoBox}>
        <h1 className={cn.month}>{data.month}</h1>
        <Paragraph content={data.text} lang={lang} />
      </div>
    </div>
  );
}

export default Timestamp;
