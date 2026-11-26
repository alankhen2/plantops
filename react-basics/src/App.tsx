import { useState } from "react";
import { Header } from "./components/Header";
import { PlantList } from "./components/PlantList";
import { StatusFilter } from "./components/StatusFilter";
import { plants } from "./data";
import type { StatusFilterValue } from "./types";

function App() {
  const [statusFilter, setStatusFilter] = useState<StatusFilterValue>("all");

  const filteredPlants =
    statusFilter === "all"
      ? plants
      : plants.filter((plant) => plant.status === statusFilter);

  return (
    <main className="container">
      <Header title="PlantOps" subtitle="Daftar peralatan" />
      <StatusFilter value={statusFilter} onChange={setStatusFilter} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default App;
