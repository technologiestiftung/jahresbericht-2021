import cn from './Intro.module.scss';

function Intro({ content, lang }) {
  const { img, headline } = content;
  return (
    <>
    <div className={cn.wrapper}>
      <div className={cn.imageContainer}>
        <img className={cn.image} src={img.src} alt={img.alt} />
      </div>
    </div>
    <div className={cn.textContainer}>
      <img src="assets/logos/citylab-logo.svg" alt="" />
      <h2 className={cn.headline} dangerouslySetInnerHTML={{ __html: headline[lang] }}/>
    </div>
    </>
  )
}

export default Intro;