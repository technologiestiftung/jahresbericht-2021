import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as KulturIcon } from "../../icons/Nav-Icon-Kultur.svg";

const slideWidth = 317;
const iconWidthPlusGap = 64.5;

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
    navOffset: 0,
    slideOffset: 0,
  },
  neueTechnologien: {
    component: <NeueTechnologienIcon />,
    label: "Neue Technologien",
    navOffset: iconWidthPlusGap,
    slideOffset: -slideWidth,
  },
  bildung: {
    component: <BildungIcon />,
    label: "Bildung",
    navOffset: iconWidthPlusGap * 2,
    slideOffset: -slideWidth * 2,
  },
  kultur: {
    component: <KulturIcon />,
    label: "Kultur",
    navOffset: iconWidthPlusGap * 3,
    slideOffset: -slideWidth * 3,
  },
  reallabor: {
    component: <ReallaborIcon />,
    label: "Prototyping",
    navOffset: iconWidthPlusGap * 4,
    slideOffset: -slideWidth * 4,
  },
};
