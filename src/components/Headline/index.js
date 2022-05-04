import cn from "./Headline.module.scss";

function Headline({ content, lang }) {
  return (
    <h2
      className={cn.headline}
      dangerouslySetInnerHTML={{ __html: content[lang] }}
    ></h2>
  );
}

export default Headline;
