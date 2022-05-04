import useStore from '../../hooks/useStore';

import {ReactComponent as GlobeIcon} from '../../icons/globe.svg';

import cn from './LanguageSwitch.module.scss';

const langSelector = (s) => s.lang;
const setLangSelector = (s) => s.setLang;

function LanguageSwitch() {
  const setLang = useStore(setLangSelector);
  const lang = useStore(langSelector);

  return (
    <div onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className={cn.wrapper}>
      <div className={cn.iconWrapper}>
        <GlobeIcon fill="#404040"/>
      </div>
      <span>{lang === 'de' ? 'en' : 'de'}</span>
    </div>
  )
}

export default LanguageSwitch;