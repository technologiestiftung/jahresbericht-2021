import cx from 'classnames'

import cn from './Button.module.scss'

function Button({to, label, theme}) {
  return (
    <a className={cx(cn.btn, cn[theme])} href={to} rel="noreferrer" target="_blank" >{label}</a>
  )
}

export default Button;