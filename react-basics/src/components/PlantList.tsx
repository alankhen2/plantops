import type { Plant } from "../types";
import { PlantCard } from "./PlantCard";

interface PlantListProps {
  plants: Plant[];
}

export function PlantList({ plants }: PlantListProps) {
  if (plants.length === 0) {
    return <p className="empty">Belum ada plant.</p>;
  }

  const activeCount = plants.filter(
    (plant) => plant.status === "active",
  ).length;

  return (
    <section>
      <p className="summary">
        {activeCount > 0
          ? `${activeCount} dari ${plants.length} plant aktif.`
          : "Tidak ada plant aktif."}
      </p>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </section>
  );
}
