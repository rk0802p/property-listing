import React from 'react';
import { Search, Filter, X, MapPin, DollarSign, Home } from 'lucide-react';

const FilterControls = ({ filters, onFilterChange }) => {
  const handleInputChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value
    });
  };

  const clearFilters = () => {
    onFilterChange({
      search: '',
      type: '',
      location: '',
      priceRange: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#111827] rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111827]">Advanced Filters</h3>
            <p className="text-[#4B5563] font-light">Refine your property search with detailed criteria</p>
          </div>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 text-[#4B5563] hover:text-[#111827] transition-colors font-medium"
          >
            <X className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Search Properties
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search by title or location..."
              value={filters.search}
              onChange={(e) => handleInputChange('search', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <select
              value={filters.location || ''}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] appearance-none cursor-pointer"
            >
              <option value="">All Locations</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Malibu">Malibu</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="San Diego">San Diego</option>
              <option value="Beverly Hills">Beverly Hills</option>
            </select>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Property Type
          </label>
          <div className="relative">
            <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <select
              value={filters.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Price Range
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
            <select
              value={filters.priceRange || ''}
              onChange={(e) => handleInputChange('priceRange', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] appearance-none cursor-pointer"
            >
              <option value="">Any Price</option>
              <option value="0-500000">Under $500K</option>
              <option value="500000-1000000">$500K - $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000+">$2M+</option>
            </select>
          </div>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Min Price
          </label>
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => handleInputChange('minPrice', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Max Price
          </label>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => handleInputChange('maxPrice', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleInputChange('bedrooms', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] appearance-none cursor-pointer"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Bathrooms
          </label>
          <select
            value={filters.bathrooms}
            onChange={(e) => handleInputChange('bathrooms', e.target.value)}
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] appearance-none cursor-pointer"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterControls; 