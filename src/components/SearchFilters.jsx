import React from 'react';

const SearchFilters = ({ onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Precio máximo</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange('price', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="2">Hasta 2€/hora</option>
            <option value="3">Hasta 3€/hora</option>
            <option value="4">Hasta 4€/hora</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Disponibilidad</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange('availability', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="available">Solo disponibles</option>
            <option value="full">Incluir completos</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Distancia</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange('distance', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="500">500m</option>
            <option value="1000">1km</option>
            <option value="2000">2km</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;