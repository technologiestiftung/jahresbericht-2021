import cn from "./Icon.module.scss";

import { ReactComponent as HinterDenKulissenIcon } from "../../icons/backstage.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/smart-city.svg";
import { ReactComponent as UnterwegsIcon } from "../../icons/on-the-way.svg";
import { ReactComponent as FrischerWind } from "../../icons/projects.svg";
import { ReactComponent as StadtUndWir } from "../../icons/city-and-us.svg";

function Icon({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "hinterDenKulissen" && <HinterDenKulissenIcon />}
      {type === "smartCity" && <SmartCityIcon />}
      {type === "unterwegs" && <UnterwegsIcon />}
      {type === "frischerWind" && <FrischerWind />}
      {type === "stadtUndWir" && <StadtUndWir />}
    </div>
  );
}

export default Icon;
