import type { Plant, Maintenance, MaintenanceCheck } from './types';

export function getActivePlants(plants: Plant[]): Plant[] {
    return plants.filter(plant => plant.status === 'active');
}

export function getPlantsBySite(plants: Plant[], siteId: number): Plant[] {
    return plants.filter(plant => plant.siteId === siteId);
}

export function getPendingMaintenances(maintenances: Maintenance[]): Maintenance[] {
    return maintenances.filter(m => m.completedAt === undefined);
}

export function isOverdue(maintenance: Maintenance, now: Date = new Date()): boolean {
    return maintenance.completedAt === undefined && maintenance.scheduledAt < now;
}

export function filterMaintenances(maintenances: Maintenance[], check: MaintenanceCheck): Maintenance[] {
    return maintenances.filter(m => check(m));
}

export function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

export function printMaintenance(maintenance: Maintenance): void {
    const date = maintenance.scheduledAt.toISOString().slice(0, 10);
    const notes = maintenance.notes ?? '-';
    console.log(`${maintenance.title} | ${date} | ${notes}`);
}