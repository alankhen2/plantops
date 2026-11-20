import { allPlants, allMaintenances, siteJakarta } from './data';
import {
    getActivePlants,
    getPlantsBySite,
    getPendingMaintenances,
    isOverdue,
    filterMaintenances,
    findById,
    printMaintenance
} from './utils';

console.log('Plant aktif:', getActivePlants(allPlants).map(p => p.name));
console.log('Plant di Jakarta:', getPlantsBySite(allPlants, siteJakarta.id).map(p => p.name));
console.log('Belum selesai:', getPendingMaintenances(allMaintenances).map(m => m.title));
console.log('Overdue:', filterMaintenances(allMaintenances, isOverdue).map(m => m.title));
console.log('Cari plant id 3:', findById(allPlants, 3)?.name ?? 'tidak ketemu');

console.log('--- Jadwal maintenance ---');
allMaintenances.forEach(m => printMaintenance(m));