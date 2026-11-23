export type PlantStatus = 'active' | 'inactive' | 'maintenance';

export interface Plant {
    id: number;
    siteId: number;
    name: string;
    status: PlantStatus;
}