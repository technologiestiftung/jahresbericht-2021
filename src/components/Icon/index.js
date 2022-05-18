import cn from "./Icon.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologien } from "../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as Kultur } from "../../icons/Nav-Icon-Kultur.svg";

function Icon({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "bildung" && <BildungIcon />}
      {type === "smartCity" && <SmartCityIcon />}
      {type === "reallabor" && <ReallaborIcon />}
      {type === "neueTechnologien" && <NeueTechnologien />}
      {type === "kultur" && <Kultur />}
    </div>
  );
}

export default Icon;
