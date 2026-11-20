import type { Site, Plant, Maintenance } from './types';

export const siteJakarta: Site = {
    id: 1,
    name: 'Site Jakarta',
    address: 'Jl. Sudirman No. 1',
    phone: '021-5551234'
};

export const siteSurabaya: Site = {
    id: 2,
    name: 'Site Surabaya',
    address: 'Jl. Pemuda No. 10'
};

export const generator: Plant = {
    id: 1,
    siteId: siteJakarta.id,
    name: 'Generator 1',
    status: 'active'
};

export const compressor: Plant = {
    id: 2,
    siteId: siteJakarta.id,
    name: 'Kompresor 1',
    status: 'inactive'
};

export const waterPump: Plant = {
    id: 3,
    siteId: siteSurabaya.id,
    name: 'Pompa Air 1',
    status: 'active'
};

export const routineCheck: Maintenance = {
    id: 1,
    plantId: generator.id,
    title: 'Routine Check',
    notes: 'Check all systems',
    scheduledAt: new Date('2024-06-01T10:00:00Z')
};

export const filterReplacement: Maintenance = {
    id: 2,
    plantId: generator.id,
    title: 'Filter Replacement',
    notes: 'Replace air filters',
    scheduledAt: new Date('2024-06-15T10:00:00Z'),
    completedAt: new Date('2024-06-15T12:00:00Z')
};

export const pumpService: Maintenance = {
    id: 3,
    plantId: waterPump.id,
    title: 'Pump Service',
    scheduledAt: new Date('2026-12-15T09:00:00Z'),
};

export const allSites: Site[] = [siteJakarta, siteSurabaya];
export const allPlants: Plant[] = [generator, compressor, waterPump];
export const allMaintenances: Maintenance[] = [routineCheck, filterReplacement, pumpService];