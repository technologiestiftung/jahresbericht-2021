import cx from "classnames";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

import cn from "./Outro.module.scss";

function Outro({ content, lang }) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper, cn.header)} id='numbers'>
        <h1 className={cn.title}>{content.blocks.intro.title[lang]}</h1>
        <Paragraph lang={lang} content={content.blocks.intro.text} />
      </div>
      <div className={cx(cn.logoWrapper, cn.berlinLogoWrapper)}>
        {content.partners.berlin.map((partner, index) => (
          <img
            className={cn.logo}
            key={index}
            src={partner.logo}
            alt='Partner Logo'
          />
        ))}
      </div>
      <div className={cn.logoWrapper}>
        {content.partners.bund.map((partner, index) => (
          <img
            className={cn.logo}
            key={index}
            src={partner.logo}
            alt='Partner Logo'
          />
        ))}
      </div>
      <div className={cx(cn.contentBlock, cn.layoutWrapper)}>
        <Paragraph lang={lang} content={content.paragraphs[0].text} />
        <Link theme={"dark"} content={content.paragraphs[0].link} lang={lang} />
      </div>
      <div className={cx(cn.contentBlock, cn.layoutWrapper)}>
        <Paragraph lang={lang} content={content.paragraphs[1].text} />
        <Link theme={"dark"} content={content.paragraphs[1].link} lang={lang} />
      </div>
    </section>
  );
}

export default Outro;
