import useStore from "./hooks/useStore";

import cx from "classnames";

import cn from "./App.module.scss";

import content from "./content";

import NeueTechnologien from "./sections/NeueTechnologien";
import SmartCity from "./sections/SmartCity";
import Kultur from "./sections/Kultur";
import Reallabor from "./sections/Reallabor";
import Bildung from "./sections/Bildung";

import Footer from "./sections/Footer";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Paragraph from "./components/Paragraph";
import Accordion from "./components/Accordion";
import PieChart from "./components/PieChart";

const langSelector = s => s.lang;

const getNavItems = () => {
  const keys = [
    "smartCity",
    "neueTechnologien",
    "kultur",
    "bildung",
    "reallabor",
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

      <section className={cx(cn.layoutWrapper, cn.layoutMargin)}>
        <PieChart />
      </section>

      <SmartCity lang={lang} content={content.smartCity} ui={content.ui} />
      <NeueTechnologien
        lang={lang}
        content={content.neueTechnologien}
        ui={content.ui}
      />
      <Kultur lang={lang} content={content.kultur} ui={content.ui} />
      <Bildung lang={lang} content={content.bildung} ui={content.ui} />
      <Reallabor lang={lang} content={content.reallabor} ui={content.ui} />
      <section className={cx(cn.layoutWrapper, cn.layoutMargin)}>
        <Paragraph lang={lang} content={content.outtro} />
      </section>
      <Footer content={content.footer} lang={lang} />
    </div>
  );
}

export default App;
