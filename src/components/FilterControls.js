import React from 'react';
import { Search, Filter, X } from 'lucide-react';

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
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#111827] rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111827]">Filters</h3>
            <p className="text-[#4B5563] font-light">Refine your property search</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Search Properties
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4B5563]" />
            <input
              type="text"
              placeholder="Search by title or location..."
              value={filters.search}
              onChange={(e) => handleInputChange('search', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-[#111827] mb-3">
            Property Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
          >
            <option value="">All Types</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Studio">Studio</option>
            <option value="Villa">Villa</option>
            <option value="Office">Office</option>
          </select>
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
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
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
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
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
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
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
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
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