import { ReactComponent as BildungIcon } from "../../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as KulturIcon } from "../../../icons/Nav-Icon-Kultur.svg";
import { ReactComponent as ActivitiesIcon } from "../../../icons/Nav-Icon-Activities.svg";

import cn from "./Navigation.module.scss";

const icons = [
  {
    id: "smartCity",
    component: <SmartCityIcon />,
  },
  {
    id: "neueTechnologien",
    component: <NeueTechnologienIcon />,
  },
  {
    id: "kultur",
    component: <KulturIcon />,
  },
  {
    id: "reallabor",
    component: <ReallaborIcon />,
  },
  {
    id: "bildung",
    component: <BildungIcon />,
  },
  {
    id: "activities",
    component: <ActivitiesIcon />,
  },
];

const Navigation = ({ data }) => {
  return (
    <div className={cn.navigation}>
      {icons.map((icon, index) => (
        <div key={index} className={cn.icon}>
          {icon.component}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
