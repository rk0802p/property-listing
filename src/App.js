import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import AddPropertyForm from './components/AddPropertyForm';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import { MOCK_PROPERTIES } from './data/mockData';
import { Home, Building2, Plus, Phone, ChevronUp } from 'lucide-react';

// Header component with navigation
const Header = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
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
              <Link
                to="/"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-[#111827] text-[#D4AF37]' 
                    : 'text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/properties"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/properties') 
                    ? 'bg-[#111827] text-[#D4AF37]' 
                    : 'text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Properties</span>
              </Link>
              <Link
                to="/contact"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'bg-[#111827] text-[#D4AF37]' 
                    : 'text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/add-property"
                className="bg-[#D4AF37] text-[#111827] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B8941F] transition-all duration-200 flex items-center space-x-2 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Property</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#111827] text-[#D4AF37] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1F2937] transition-all duration-200 z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

// Main App component with routing
function App() {
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
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

  return (
    <Router>
      <div className="min-h-screen bg-[#F8FAFC] font-inter">
        <Header />
        
        {/* Main Content with Routes */}
        <main className="w-full">
          <Routes>
            {/* Home Page */}
            <Route 
              path="/" 
              element={<LandingPage />} 
            />
            
            {/* Properties List Page */}
            <Route 
              path="/properties" 
              element={
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <PropertyListWrapper 
                    properties={properties}
                    filters={filters}
                    setFilters={setFilters}
                  />
                </div>
              } 
            />
            
            {/* Individual Property Details Page */}
            <Route 
              path="/property/:id" 
              element={
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <PropertyDetailsWrapper properties={properties} />
                </div>
              } 
            />
            
            {/* Add Property Page */}
            <Route 
              path="/add-property" 
              element={
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <AddPropertyFormWrapper 
                    properties={properties}
                    setProperties={setProperties}
                  />
                </div>
              } 
            />
            
            {/* Contact Page */}
            <Route 
              path="/contact" 
              element={
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <ContactPage />
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Wrapper component for PropertyList to handle navigation
const PropertyListWrapper = ({ properties, filters, setFilters }) => {
  const navigate = useNavigate();

  const handleViewProperty = (propertyId) => {
    navigate(`/property/${propertyId}`);
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

  return (
    <PropertyList
      properties={getFilteredProperties()}
      filters={filters}
      onFilterChange={setFilters}
      onViewProperty={handleViewProperty}
    />
  );
};

// Wrapper component for AddPropertyForm to handle navigation
const AddPropertyFormWrapper = ({ properties, setProperties }) => {
  const navigate = useNavigate();

  const handleAddProperty = (newProperty) => {
    const propertyWithId = {
      ...newProperty,
      id: Date.now().toString(),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    };
    setProperties([...properties, propertyWithId]);
    navigate('/properties');
  };

  return (
    <AddPropertyForm
      onAddProperty={handleAddProperty}
    />
  );
};

// Wrapper component for PropertyDetails to get the ID from URL
const PropertyDetailsWrapper = ({ properties }) => {
  const location = useLocation();
  const propertyId = location.pathname.split('/').pop();
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">Property Not Found</h2>
        <p className="text-[#4B5563] mb-6">The property you're looking for doesn't exist.</p>
        <Link 
          to="/properties" 
          className="bg-[#111827] text-white px-6 py-3 rounded-xl hover:bg-[#1F2937] transition-all duration-200 font-semibold"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  return <PropertyDetails property={property} />;
};

export default App; 