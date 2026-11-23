import type { Plant } from '../types';

interface PlantCardProps {
    plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
    return (
        <div className="plant-card">
            <h2>{plant.name}</h2>
            <p>ID : {plant.id}</p>
            <p>Status : {plant.status}</p>
        </div>
    );
}