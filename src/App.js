import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import AddPropertyForm from './components/AddPropertyForm';
import { MOCK_PROPERTIES } from './data/mockData';

function App() {
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
  const [view, setView] = useState('list');
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleViewProperty = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setView('details');
  };

  const handleAddProperty = (newProperty) => {
    const propertyWithId = {
      ...newProperty,
      id: Date.now().toString(),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    };
    setProperties([...properties, propertyWithId]);
    setView('list');
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedPropertyId(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const getFilteredProperties = () => {
    return properties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           property.location.toLowerCase().includes(filters.search.toLowerCase());
      const matchesType = !filters.type || property.type === filters.type;
      const matchesPrice = (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
                          (!filters.maxPrice || property.price <= parseInt(filters.maxPrice));
      const matchesBedrooms = !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
      const matchesBathrooms = !filters.bathrooms || property.bathrooms >= parseInt(filters.bathrooms);

      return matchesSearch && matchesType && matchesPrice && matchesBedrooms && matchesBathrooms;
    });
  };

  const selectedProperty = properties.find(p => p.id === selectedPropertyId);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Property Listings</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setView('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  view === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setView('add')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  view === 'add' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Add Property
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'list' && (
          <PropertyList
            properties={getFilteredProperties()}
            filters={filters}
            onFilterChange={handleFilterChange}
            onViewProperty={handleViewProperty}
          />
        )}
        {view === 'details' && selectedProperty && (
          <PropertyDetails
            property={selectedProperty}
            onBack={handleBackToList}
          />
        )}
        {view === 'add' && (
          <AddPropertyForm
            onAddProperty={handleAddProperty}
            onCancel={() => setView('list')}
          />
        )}
      </main>
    </div>
  );
}

export default App; 