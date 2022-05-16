import cx from "classnames";
import cn from "./Link.module.scss";

import { ReactComponent as ArrowIcon } from "../../icons/arrow-circle-right.svg";

function Link({ content, lang, theme }) {
  const href = content.href[lang] ? content.href[lang] : content.href;
  return (
    <a className={cx(cn.link, cn[theme])} href={href} alt='' target='blank'>
      {content[lang]}
      <div className={cn.iconWrapper}>
        <ArrowIcon fill='white' />
      </div>
    </a>
  );
}

export default Link;
