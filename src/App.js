import useStore from "./hooks/useStore";
import cn from "./App.module.scss";
import content from "./content";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Accordions from "./sections/Accordions";
import Offenheit from "./sections/Offenheit";
import SmartCity from "./sections/SmartCity";
import NeueTechnologien from "./sections/NeueTechnologien";
import Kultur from "./sections/Kultur";
import Bildung from "./sections/Bildung";
import Reallabor from "./sections/Reallabor";
import Activities from "./sections/Activities";
import Chronologie from "./sections/Chronologie";
import Team from "./sections/Team";
import Outro from "./sections/Outro";
import Footer from "./sections/Footer";

const langSelector = s => s.lang;

const getNavItems = () => {
  const keys = [
    "smartCity",
    "neueTechnologien",
    "kultur",
    "bildung",
    "reallabor",
    "activities",
  ];
  return keys.map(d => ({
    id: d,
    scrollId: content[d].id,
    topic: content[d].topic,
    bubbles: {
      scrollId: content[d].id,
      text: content[d].items.map(d => d.text.title),
    },
  }));
};

function App() {
  const lang = useStore(langSelector);
  const navItems = getNavItems();

  return (
    <div className={cn.app}>
      <Intro content={content.header} lang={lang} />
      <Navbar items={navItems} lang={lang} />
      <Accordions accordionItems={content.accordions} lang={lang} />
      {lang === "de" && <Offenheit lang={lang} content={content.offenheit} />}
      <SmartCity lang={lang} content={content.smartCity} ui={content.ui} />
      <NeueTechnologien
        lang={lang}
        content={content.neueTechnologien}
        ui={content.ui}
      />
      <Kultur lang={lang} content={content.kultur} ui={content.ui} />
      <Bildung lang={lang} content={content.bildung} ui={content.ui} />
      <Reallabor lang={lang} content={content.reallabor} ui={content.ui} />
      <Activities lang={lang} content={content.activities} ui={content.ui} />
      {lang === "de" && (
        <Chronologie lang={lang} content={content.chronologie} />
      )}
      <Team lang={lang} content={content.team} ui={content.ui} />
      <Outro lang={lang} content={content.outro} />
      <Footer content={content.footer} lang={lang} />
    </div>
  );
}

export default App;
