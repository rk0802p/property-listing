import React from 'react';
import { Bed, Bath, Square, MapPin, Eye, Heart } from 'lucide-react';

const PropertyCard = ({ property, onViewProperty, viewMode = 'grid' }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <div className="flex flex-col lg:flex-row">
          {/* Property Image */}
          <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                For Rent
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                {property.type}
              </span>
            </div>
            
            {/* Heart Icon */}
            <div className="absolute top-4 right-4">
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all duration-200">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex-1 p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
              <div className="flex-1">
                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(property.price)}
                  </span>
                  <span className="text-gray-500 text-lg font-medium ml-2">/month</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {property.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span className="text-lg font-medium">{property.location}</span>
                </div>

                {/* Property Stats */}
                <div className="flex items-center space-x-8 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{property.area} Sqft</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
                  {property.description}
                </p>
              </div>

              <div className="flex flex-col items-end space-y-6">
                {/* Bottom Badges */}
                <div className="flex gap-3">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    For Sale
                  </span>
                  <span className="bg-gray-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    {property.type}
                  </span>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => onViewProperty(property.id)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-3 font-semibold text-lg shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (original design)
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      {/* Property Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
            For Rent
          </span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
            {property.type}
          </span>
        </div>
        
        {/* Heart Icon */}
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all duration-200">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(property.price)}
          </span>
          <span className="text-gray-500 text-base font-medium ml-2">/month</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
          {property.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-5">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>

        {/* Property Stats */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-2" />
              <span className="font-semibold">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2" />
              <span className="font-semibold">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-2" />
              <span className="font-semibold">{property.area} Sqft</span>
            </div>
          </div>
        </div>

        {/* Bottom Badges */}
        <div className="flex gap-2 mb-6">
          <span className="bg-red-500 text-white px-3 py-2 rounded-xl text-xs font-semibold shadow-md">
            For Sale
          </span>
          <span className="bg-gray-700 text-white px-3 py-2 rounded-xl text-xs font-semibold shadow-md">
            {property.type}
          </span>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewProperty(property.id)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-3 font-semibold shadow-lg"
        >
          <Eye className="w-5 h-5" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard; 