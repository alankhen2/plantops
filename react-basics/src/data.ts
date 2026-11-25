import type { Plant } from "./types";

export const plants: Plant[] = [
    { id: 1, siteId: 1, name: 'Generator 1', status: 'active' },
    { id: 2, siteId: 1, name: 'Kompresor 1', status: 'inactive' },
    { id: 3, siteId: 2, name: 'Pompa Air 1', status: 'maintenance' },
    { id: 4, siteId: 2, name: 'Genset Cadangan', status: 'active' },
];