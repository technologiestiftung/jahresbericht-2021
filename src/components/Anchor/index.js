import cn from './Anchor.module.scss';

function Anchor({id}) {
  return (
    <div className={cn.anchor} id={`anchor-${id}`}></div>
  )
}

export default Anchor;