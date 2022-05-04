import cn from './Quote.module.scss';
import cx from 'classnames'


function Quote({ content, lang }) {
  const { text, author } = content;

  return (
    <div className={cx(cn.singleCol, cn.wrapper)}>
      <span className={cn.quote}>"{text[lang]}"</span>
      <div className={cn.authorWrapper}>
        <img className={cn.img} src={author.src} alt=""/>
        <span className={cn.name}>{author.name}</span>
        <span className={cn.job}>{author.job[lang]}</span>
      </div>
    </div>
  )
}

export default Quote;