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
            height={partner.logoHeight}
            alt='Partner Logo'
          />
        ))}
      </div>
      <div className={cx(cn.logoWrapper, cn.bundLogoWrapper)}>
        {content.partners.bund.map((partner, index) => (
          <div key={index}>
            <img
              key={index}
              src={partner.logo}
              alt='Partner Logo'
              height={partner.logoHeight}
            />
          </div>
        ))}
      </div>
      {content.paragraphs.map((paragraph, index) => (
        <div className={cx(cn.contentBlock, cn.layoutWrapper)} key={index}>
          <Paragraph lang={lang} content={paragraph.text} />
          <Link theme={"dark"} content={paragraph.link} lang={lang} />
        </div>
      ))}
    </section>
  );
}

export default Outro;
