import React, { useState, useEffect } from 'react';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import AddPropertyForm from './components/AddPropertyForm';
import LandingPage from './components/LandingPage';
import { MOCK_PROPERTIES } from './data/mockData';
import { Home, Building2, Plus, Phone, ChevronUp } from 'lucide-react';

function App() {
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
  const [view, setView] = useState('landing'); // 'landing', 'list', 'details', 'add'
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      {/* Top Header Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
              <span className="text-sm font-medium">envato market</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-green-600 transition-colors">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900 tracking-tight">Luminor</span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => setView('landing')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  view === 'landing' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  view === 'list' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Properties</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
                <span>Pages</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
                <span>Blog</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setView('add')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 flex items-center space-x-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Property</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {view === 'landing' && (
          <LandingPage onViewProperties={() => setView('list')} />
        )}
        {view === 'list' && (
          <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-8">
            <PropertyList
              properties={getFilteredProperties()}
              filters={filters}
              onFilterChange={handleFilterChange}
              onViewProperty={handleViewProperty}
            />
          </div>
        )}
        {view === 'details' && selectedProperty && (
          <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-8">
            <PropertyDetails
              property={selectedProperty}
              onBack={handleBackToList}
            />
          </div>
        )}
        {view === 'add' && (
          <div className="max-w-[1920px] mx-auto px-6 lg:px-8 py-8">
            <AddPropertyForm
              onAddProperty={handleAddProperty}
              onCancel={() => setView('list')}
            />
          </div>
        )}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App; 