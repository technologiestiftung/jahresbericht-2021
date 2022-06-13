import Icon from "../../components/Icon";
import Headline from "../../components/Headline";
import Timeline from "../../components/Timeline";

import cx from "classnames";
import cn from "./Chronologie.module.scss";

function Chronologie({ content, lang }) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Icon type='chronologie' />
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Timeline items={content.items} lang={lang} />
      </div>
    </section>
  );
}

export default Chronologie;
