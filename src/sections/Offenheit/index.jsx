import cn from "./Offenheit.module.scss";
import cx from "classnames";

import Paragraph from "../../components/Paragraph";
import Headline from "../../components/Headline";
import Icon from "../../components/Icon";
import PieChart from "../../components/PieChart";
import Development from "../../components/Development";

function Offenheit({ content, lang }) {
  console.log(content);
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Icon type='entwicklung' />
        <Headline lang={lang} content={content.title} />
        <Paragraph lang={lang} content={content.text} />
      </div>
      <div className={cn.contentWrapper}>
        <Development />
        <div className={cn.description}>
          <h2 className={cn.title}>{content.blocks.entwicklung.title[lang]}</h2>
          <p className={cn.subTitle}>
            {content.blocks.entwicklung.paragraph[lang]}
          </p>
        </div>
      </div>
      <div className={cx(cn.contentWrapper, cn.mittelWrapper)}>
        <PieChart />
        <div className={cn.description}>
          <h2 className={cn.title}>{content.blocks.mittel.title[lang]}</h2>
          <p className={cn.subTitle}>{content.blocks.mittel.paragraph[lang]}</p>
        </div>
      </div>
    </section>
  );
}

export default Offenheit;
