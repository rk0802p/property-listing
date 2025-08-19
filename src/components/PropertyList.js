import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import FilterControls from './FilterControls';
import { Search, Filter, Grid, List } from 'lucide-react';

const PropertyList = ({ properties, filters, onFilterChange, onViewProperty }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('default');

  const getSortedProperties = () => {
    const sortedProperties = [...properties];
    
    switch (sortBy) {
      case 'price-low-high':
        return sortedProperties.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return sortedProperties.sort((a, b) => b.price - a.price);
      case 'newest':
        return sortedProperties.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      case 'oldest':
        return sortedProperties.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      default:
        return sortedProperties;
    }
  };

  const sortedProperties = getSortedProperties();

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-[#4B5563] mb-6 font-medium">
        Home > Properties
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-4xl font-bold text-[#111827] tracking-tight mb-2">All Properties</h2>
          <p className="text-lg text-[#4B5563] font-light">
            {sortedProperties.length} properties found
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-200">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-all duration-200 rounded-l-xl ${
                viewMode === 'grid' 
                  ? 'bg-[#111827] text-[#D4AF37] shadow-md' 
                  : 'text-[#4B5563] hover:text-[#111827] hover:bg-gray-50'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-3 transition-all duration-200 rounded-r-xl ${
                viewMode === 'list' 
                  ? 'bg-[#111827] text-[#D4AF37] shadow-md' 
                  : 'text-[#4B5563] hover:text-[#111827] hover:bg-gray-50'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          
          {/* Sort Dropdown */}
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] bg-white shadow-sm"
          >
            <option value="default">Sort by (Default)</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Filter Controls */}
      <FilterControls filters={filters} onFilterChange={onFilterChange} />

      {/* Properties Display */}
      {sortedProperties.length > 0 ? (
        viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {sortedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewProperty={onViewProperty}
                viewMode="grid"
              />
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-6">
            {sortedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewProperty={onViewProperty}
                viewMode="list"
              />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-20">
          <Filter className="w-16 h-16 text-[#4B5563] mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-[#111827] mb-4">No properties found</h3>
          <p className="text-lg text-[#4B5563] font-light max-w-md mx-auto">
            Try adjusting your search criteria or filters to find more properties.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyList; 