import cn from "./Intro.module.scss";

function Intro({ content, lang }) {
  const { img, headline } = content;
  return (
    <>
      <div className={cn.textContainer}>
        <img src='assets/logos/tsb-logo.svg' alt='' />
        <h2
          className={cn.headline}
          dangerouslySetInnerHTML={{ __html: headline[lang] }}
        />
      </div>
      <div className={cn.wrapper}>
        <div className={cn.imageContainer}>
          <img className={cn.image} src={img.src} alt={img.alt} />
        </div>
      </div>
    </>
  );
}

export default Intro;
