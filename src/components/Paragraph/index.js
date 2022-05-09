import React from "react";
import cn from "./Paragraph.module.scss";

// eslint-disable-next-line react/display-name
const Paragraph = React.forwardRef(({ content, lang }, ref) => {
  return (
    <p
      ref={ref}
      className={cn.paragraph}
      dangerouslySetInnerHTML={{ __html: content[lang] }}
    ></p>
  );
});

export default Paragraph;
