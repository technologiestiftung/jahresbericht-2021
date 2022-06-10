import cn from "./Icon.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as KulturIcon } from "../../icons/Nav-Icon-Kultur.svg";
import { ReactComponent as ActivitiesIcon } from "../../icons/Nav-Icon-Activities.svg";
import { ReactComponent as TeamIcon } from "../../icons/Nav-Icon-Team.svg";
import { ReactComponent as EntwicklungIcon } from "../../icons/Nav-Icon-Entwicklung.svg";

function Icon({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "bildung" && <BildungIcon />}
      {type === "smartCity" && <SmartCityIcon />}
      {type === "reallabor" && <ReallaborIcon />}
      {type === "neueTechnologien" && <NeueTechnologienIcon />}
      {type === "kultur" && <KulturIcon />}
      {type === "activities" && <ActivitiesIcon />}
      {type === "team" && <TeamIcon />}
      {type === "entwicklung" && <EntwicklungIcon />}
    </div>
  );
}

export default Icon;
