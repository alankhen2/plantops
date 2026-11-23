import { Header } from './components/Header';
import { PlantCard } from './components/PlantCard';
import type { Plant } from './types';

const generator: Plant = { id: 1, siteId: 1, name: 'Generator 1', status: 'active' };
const compressor: Plant = { id: 2, siteId: 1, name: 'Kompresor 1', status: 'inactive' };
const waterPump: Plant = { id: 3, siteId: 2, name: 'Pompa Air 1', status: 'maintenance' };

function App() {
    return (
        <main className="container">
          <Header title="PlantOps" subtitle="Daftar Peralatan"/>
          <PlantCard plant={generator} />
          <PlantCard plant={compressor} />
          <PlantCard plant={waterPump} />
        </main>
    );
}

export default App;