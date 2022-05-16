import cx from "classnames";
import cn from "./Footer.module.scss";

function Footer({ content, lang }) {
  return (
    <div className={cn.footer}>
      <div className={cn.top}>
        <div className={cn.topWrapper}>
          <div className={cn.logos}>
            {content.logos.map((d, i) => {
              return (
                <div
                  key={`logo-key-${i}`}
                  className={cx(cn.block, cn[d.className])}
                >
                  <a
                    className={cn.logoWrapper}
                    href={d.href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img className={cn.logo} src={d.src[lang]} alt={d.alt} />
                  </a>
                </div>
              );
            })}
          </div>
          <div className={cn.sitemap}>
            <span className={cn.title}>Sitemap</span>
            <div className={cn.sitemapLinks}>
              {content.sitemap.links.map((d, i) => {
                return (
                  <a
                    className={cn.sitemapLink}
                    href={d.href}
                    rel='noreferrer'
                    target='_blank'
                    key={i}
                  >
                    {d.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={cn.bottom}>
        <div className={cn.left}>
          <span className={cn.copyright}>{content.copyright}</span>
        </div>
        <div className={cn.items}>
          <div className={cn.item}>
            <a
              className={cn.link}
              href={content.privacy.href}
              rel='noreferrer'
              target='_blank'
            >
              {content.privacy[lang]}
            </a>
          </div>
          <div className={cn.item}>
            <a
              className={cn.link}
              href={content.impressum.href}
              rel='noreferrer'
              target='_blank'
            >
              {content.impressum[lang]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
