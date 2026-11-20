export interface Site {
    id: number;
    name: string;
    address: string;
    phone?: string;
}

export type PlantStatus = 'active' | 'inactive' | 'maintenance';

export interface Plant {
    id: number;
    siteId: number;
    name: string;
    status: PlantStatus;
}

export interface Maintenance {
    id: number;
    plantId: number;
    title: string;
    notes?: string;
    scheduledAt: Date;
    completedAt?: Date;
}

export type MaintenanceCheck = (m: Maintenance) => boolean;