import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import FilterControls from './FilterControls';
import { Search, Filter, Grid, List, MapPin, DollarSign, Home } from 'lucide-react';

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
      {/* Elegant Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#111827] tracking-tight mb-4">
          Discover Your Dream Property
        </h1>
        <p className="text-xl text-[#4B5563] font-light max-w-2xl mx-auto">
          Explore our curated collection of premium properties in the most desirable locations
        </p>
      </div>

      {/* Premium Filter Bar */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Quick Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="w-full pl-12 pr-4 py-4 text-[#111827] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-sm placeholder-[#9CA3AF]"
            />
          </div>

          {/* Location Filter */}
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <select
              value={filters.location || ''}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
              className="pl-12 pr-8 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] bg-white appearance-none cursor-pointer"
            >
              <option value="">All Locations</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Malibu">Malibu</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="San Diego">San Diego</option>
              <option value="Beverly Hills">Beverly Hills</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <select
              value={filters.priceRange || ''}
              onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
              className="pl-12 pr-8 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] bg-white appearance-none cursor-pointer"
            >
              <option value="">Any Price</option>
              <option value="0-500000">Under $500K</option>
              <option value="500000-1000000">$500K - $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000+">$2M+</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="relative">
            <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <select
              value={filters.type || ''}
              onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
              className="pl-12 pr-8 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] bg-white appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="bg-[#111827] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1F2937] transition-all duration-200 shadow-lg">
            Search
          </button>
        </div>
      </div>

      {/* View Toggle & Sort */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-all duration-200 rounded-l-xl ${
                viewMode === 'grid' 
                  ? 'bg-[#111827] text-[#D4AF37] shadow-sm' 
                  : 'text-[#4B5563] hover:text-[#111827] hover:bg-gray-50'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-3 transition-all duration-200 rounded-r-xl ${
                viewMode === 'list' 
                  ? 'bg-[#111827] text-[#D4AF37] shadow-sm' 
                  : 'text-[#4B5563] hover:text-[#111827] hover:bg-gray-50'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          
          {/* Results Count */}
          <div className="text-[#4B5563] font-medium">
            {sortedProperties.length} properties found
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] bg-white shadow-sm appearance-none cursor-pointer pr-10"
          >
            <option value="default">Sort by (Default)</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      {sortedProperties.length > 0 ? (
        viewMode === 'grid' ? (
          // Premium Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Load More / Pagination */}
      {sortedProperties.length > 0 && (
        <div className="text-center pt-12">
          <button className="bg-[#111827] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1F2937] transition-all duration-200 shadow-lg hover:shadow-xl">
            Load More Properties
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList; 