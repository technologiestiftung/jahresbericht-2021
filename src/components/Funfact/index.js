import cn from "./Funfact.module.scss";

import { ReactComponent as SmileIcon } from "../../icons/smile.svg";

function Funfact({ content, lang }) {
  return (
    <div className={cn.wrapper}>
      <div className={cn.iconWrapper}>
        <SmileIcon fill={"blue"} />
      </div>
      <div
        className={cn.text}
        dangerouslySetInnerHTML={{ __html: content[lang] }}
      />
    </div>
  );
}

export default Funfact;
