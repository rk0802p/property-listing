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
    location: '',
    priceRange: '',
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
      const matchesLocation = !filters.location || property.location.includes(filters.location);
      
      // Handle price range filtering
      let matchesPriceRange = true;
      if (filters.priceRange) {
        switch (filters.priceRange) {
          case '0-500000':
            matchesPriceRange = property.price < 500000;
            break;
          case '500000-1000000':
            matchesPriceRange = property.price >= 500000 && property.price < 1000000;
            break;
          case '1000000-2000000':
            matchesPriceRange = property.price >= 1000000 && property.price < 2000000;
            break;
          case '2000000+':
            matchesPriceRange = property.price >= 2000000;
            break;
          default:
            matchesPriceRange = true;
        }
      }
      
      const matchesPrice = (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
                          (!filters.maxPrice || property.price <= parseInt(filters.maxPrice));
      const matchesBedrooms = !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
      const matchesBathrooms = !filters.bathrooms || property.bathrooms >= parseInt(filters.bathrooms);

      return matchesSearch && matchesType && matchesLocation && matchesPriceRange && matchesPrice && matchesBedrooms && matchesBathrooms;
    });
  };

  const selectedProperty = properties.find(p => p.id === selectedPropertyId);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter">
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#111827] rounded-lg flex items-center justify-center shadow-sm">
                <Building2 className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-2xl font-bold text-[#111827] tracking-tight">Luminor</span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => setView('landing')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  view === 'landing' 
                    ? 'bg-[#111827] text-[#D4AF37]' 
                    : 'text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  view === 'list' 
                    ? 'bg-[#111827] text-[#D4AF37]' 
                    : 'text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Properties</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-200">
                <span>Pages</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-200">
                <span>Blog</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-200">
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setView('add')}
                className="bg-[#D4AF37] text-[#111827] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B8941F] transition-all duration-200 flex items-center space-x-2 shadow-sm"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <PropertyList
              properties={getFilteredProperties()}
              filters={filters}
              onFilterChange={handleFilterChange}
              onViewProperty={handleViewProperty}
            />
          </div>
        )}
        {view === 'details' && selectedProperty && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <PropertyDetails
              property={selectedProperty}
              onBack={handleBackToList}
            />
          </div>
        )}
        {view === 'add' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#111827] text-[#D4AF37] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1F2937] transition-all duration-200 z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App; 