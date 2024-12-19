import React, { useState } from 'react';
import Map from './components/Map';
import ParkingList from './components/ParkingList';
import SearchFilters from './components/SearchFilters';

function App() {
  const [filters, setFilters] = useState({
    price: '',
    availability: '',
    distance: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Apparcamiento</h1>
          <p className="text-sm">Encuentra tu aparcamiento ideal en Donostia-San Sebastián</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <SearchFilters onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Map />
          </div>
          <div>
            <ParkingList />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2023 Parking Donostia - Aplicación de prueba</p>
        </div>
      </footer>
    </div>
  );
}

export default App;