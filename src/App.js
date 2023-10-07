import ComponentList from "./components/ComponentList";

import data from "./temp/data.json";

export default function App() {

  return (
    <div>
      {
        <ComponentList items={data} />
      }
    </div>
  );
}
