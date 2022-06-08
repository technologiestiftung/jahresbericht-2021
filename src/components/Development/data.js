import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as KulturIcon } from "../../icons/Nav-Icon-Kultur.svg";

export const departmentList = [
  "smartCity",
  "neueTechnologien",
  "bildung",
  "kultur",
  "reallabor",
];

export const departments = {
  smartCity: {
    component: <SmartCityIcon />,
    label: "Smart City",
    offset: 0,
  },
  neueTechnologien: {
    component: <NeueTechnologienIcon />,
    label: "Neue Technologien",
    offset: 64,
  },
  bildung: {
    component: <BildungIcon />,
    label: "Bildung",
    offset: 129,
  },
  kultur: {
    component: <KulturIcon />,
    label: "Kultur",
    offset: 193,
  },
  reallabor: {
    component: <ReallaborIcon />,
    label: "Prototyping",
    offset: 258,
  },
};
