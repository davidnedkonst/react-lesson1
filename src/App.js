import Section from "./components/Section";
import ComponentList from "./components/ComponentList";

import data from "./temp/data.json";

export default function App() {

  return (
    <div>

      <Section title="Section1">1</Section>
      <Section><ComponentList items={data} /></Section>

    </div>
  );
}
