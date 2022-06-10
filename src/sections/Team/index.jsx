import cx from "classnames";
import cn from "./Team.module.scss";
import Paragraph from "../../components/Paragraph";
import Headline from "../../components/Headline";
import Icon from "../../components/Icon";

function Team({ content, lang }) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <div className={cn.header}>
          <Icon type='team' />
          <Headline lang={lang} content={content.blocks.intro.title} />
          <Paragraph lang={lang} content={content.blocks.intro.text} />
        </div>
        <div className={cn.teamWrapper}>
          {content.items.map((item, index) => (
            <div key={index} className={cn.teamElement}>
              <div className={cn.head}>
                <img src={item.img} alt={item.name} className={cn.portrait} />
                <div className={cn.description}>
                  <strong>{item.name}</strong>
                  <span className={cn.title}>{item.title}</span>
                </div>
              </div>
              <div className={cn.quote}>{item.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
