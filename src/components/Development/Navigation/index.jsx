import { ReactComponent as BildungIcon } from "../../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as KulturIcon } from "../../../icons/Nav-Icon-Kultur.svg";
import { ReactComponent as ActivitiesIcon } from "../../../icons/Nav-Icon-Activities.svg";

import cn from "./Navigation.module.scss";

const icons = {
  smartCity: {
    icon: <SmartCityIcon />,
    width: 30,
  },
  neueTechnologien: {
    icon: <NeueTechnologienIcon />,
    width: 30,
  },
  kultur: {
    icon: <KulturIcon />,
    width: 30,
  },
  reallabor: {
    icon: <ReallaborIcon />,
    width: 30,
  },
  bildung: {
    icon: <BildungIcon />,
    width: 30,
  },
  activities: {
    icon: <ActivitiesIcon />,
    width: 30,
  },
};

const Navigation = ({ data }) => {
  return (
    <div className={cn.navigation}>
      <div>LOL</div>
    </div>
  );
};

export default Navigation;
