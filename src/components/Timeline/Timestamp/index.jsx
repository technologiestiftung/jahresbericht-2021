import cn from "./Timestamp.module.scss";

import Paragraph from "../../Paragraph";

function Timestamp({ index, data, lang }) {
  return (
    <div className={cn.timestamp}>
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
