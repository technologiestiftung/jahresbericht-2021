import cx from "classnames";

import cn from "./ImageGroup.module.scss";

function ImageGroup({ images, activeItem }) {
  const standardPosition = {
    objectPosition: "center center",
  };

  return (
    <div className={cn.imagesWrapper}>
      {images.map((d, i) => (
        <div key={`image-key-${i}`} className={cn.imageWrapper}>
          <img
            key={d.id}
            className={cx(cn.image, { [cn.active]: activeItem.id === d.id })}
            src={d.img.src}
            alt={d.img.alt}
            style={{
              objectPosition: d.img.position
                ? d.img.position
                : standardPosition,
              objectFit: d.img.fit ? d.img.fit : "cover",
            }}
          />
          {d.img.copyright && (
            <span
              className={cx(cn.copyright, cn[activeItem.theme], {
                [cn.active]: activeItem.id === d.id,
              })}
            >
              {d.img.copyright}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageGroup;
