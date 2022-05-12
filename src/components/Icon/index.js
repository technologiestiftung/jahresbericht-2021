import cn from "./Icon.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/backstage.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/smart-city.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/on-the-way.svg";
import { ReactComponent as NeueTechnologien } from "../../icons/projects.svg";
import { ReactComponent as Kultur } from "../../icons/city-and-us.svg";

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
