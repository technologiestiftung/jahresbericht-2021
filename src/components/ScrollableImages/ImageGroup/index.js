import cx from 'classnames';

import cn from './ImageGroup.module.scss';

// import { useImageGroupStore } from '../../../hooks/useStore'

// const activeSelector = (s) => s.active;

function ImageGroup({images, activeItem}) {

  // const active = useImageGroupStore(activeSelector);

  return (
    <div className={cn.imagesWrapper}>
      {images.map((d,i) => (
        <div key={`image-key-${i}`} className={cn.imageWrapper}>
          <img 
            key={d.id} 
            className={cx(cn.image, {[cn.active]: activeItem.id === d.id})}
            src={d.img.src} 
            alt={d.img.alt} 
          />
          {d.img.copyright && <span className={cx(cn.copyright, cn[activeItem.theme], {[cn.active]: activeItem.id === d.id})}>{d.img.copyright}</span>}
        </div>
      ))}
    </div>
  )
}

export default ImageGroup;