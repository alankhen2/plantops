import type { Plant } from "../types";
import { StatusBadge } from "./StatusBadge";

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <div className="plant-card">
      <h2>{plant.name}</h2>
      <p>ID : {plant.id}</p>
      <StatusBadge status={plant.status} />
      {plant.status === "maintenance" && (
        <p className="warning">Sedang dalam perawatan, jangan dioperasikan</p>
      )}
    </div>
  );
}
