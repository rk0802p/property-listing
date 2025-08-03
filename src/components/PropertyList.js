import React from 'react';
import PropertyCard from './PropertyCard';
import FilterControls from './FilterControls';
import { Search, Filter } from 'lucide-react';

const PropertyList = ({ properties, filters, onFilterChange, onViewProperty }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Properties</h2>
          <p className="text-gray-600 mt-1">
            {properties.length} property{properties.length !== 1 ? 'ies' : 'y'} found
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Search className="w-4 h-4" />
          <span>Search and filter properties</span>
        </div>
      </div>

      {/* Filter Controls */}
      <FilterControls filters={filters} onFilterChange={onFilterChange} />

      {/* Properties Grid */}
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewProperty={onViewProperty}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
          <p className="text-gray-600">
            Try adjusting your search criteria or filters to find more properties.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyList; 