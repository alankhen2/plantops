import { Header } from "./components/Header";
import { PlantList } from "./components/PlantList";
import { plants } from "./data";

function App() {
  return (
    <main className="container">
      <Header title="PlantOps" subtitle="Daftar Peralatan" />
      <PlantList plants={plants} />
    </main>
  );
}

export default App;
