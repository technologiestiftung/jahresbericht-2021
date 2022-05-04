import cn from './Paragraph.module.scss';

function Paragraph({content, lang}) {
  return (
    <p className={cn.paragraph} dangerouslySetInnerHTML={{__html: content[lang]}}></p>
  )
}

export default Paragraph;