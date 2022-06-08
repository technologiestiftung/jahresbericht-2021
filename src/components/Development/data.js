import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as ReallaborIcon } from "../../icons/Nav-Icon-Reallabor.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../icons/Nav-Icon-NeueTechnologien.svg";
import { ReactComponent as KulturIcon } from "../../icons/Nav-Icon-Kultur.svg";

export const departments = [
  {
    id: "smartCity",
    component: <SmartCityIcon />,
    label: "Smart City",
  },
  {
    id: "neueTechnologien",
    component: <NeueTechnologienIcon />,
    label: "Neue Technologien",
  },
  {
    id: "bildung",
    component: <BildungIcon />,
    label: "Bildung",
  },
  {
    id: "kultur",
    component: <KulturIcon />,
    label: "Kultur",
  },
  {
    id: "reallabor",
    component: <ReallaborIcon />,
    label: "Prototyping",
  },
];
