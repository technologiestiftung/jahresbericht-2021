import useStore from "./hooks/useStore";

import cx from "classnames";

import cn from "./App.module.scss";

import content from "./content";

import NeueTechnologien from "./sections/NeueTechnologien";
import SmartCity from "./sections/SmartCity";
import StadtUndWir from "./sections/StadtUndWir";
import Unterwegs from "./sections/Unterwegs";
import HinterDenKulissen from "./sections/HinterDenKulissen";

import Footer from "./sections/Footer";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Paragraph from "./components/Paragraph";
import Accordion from "./components/Accordion";

const langSelector = s => s.lang;

const getNavItems = () => {
  const keys = [
    "smartCity",
    "neueTechnologien",
    "stadtUndWir",
    "hinterDenKulissen",
    "unterwegs",
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
      <section className={cx(cn.layoutWrapper, cn.intro)}>
        <Accordion
          lang={lang}
          title={content.acc_1.title}
          content={content.acc_1}
        />
        <Accordion
          lang={lang}
          title={content.acc_1.title}
          content={content.acc_1}
        />
      </section>
      <SmartCity lang={lang} content={content.smartCity} ui={content.ui} />
      <NeueTechnologien
        lang={lang}
        content={content.neueTechnologien}
        ui={content.ui}
      />
      <StadtUndWir lang={lang} content={content.stadtUndWir} ui={content.ui} />
      <HinterDenKulissen
        lang={lang}
        content={content.hinterDenKulissen}
        ui={content.ui}
      />
      <Unterwegs lang={lang} content={content.unterwegs} ui={content.ui} />
      <section className={cx(cn.layoutWrapper, cn.layoutMargin)}>
        <Paragraph lang={lang} content={content.outtro} />
      </section>
      <Footer content={content.footer} lang={lang} />
    </div>
  );
}

export default App;
