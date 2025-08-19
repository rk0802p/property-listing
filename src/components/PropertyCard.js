import React from 'react';
import { Bed, Bath, Square, MapPin, Eye, Heart, Star } from 'lucide-react';

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
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#D4AF37]">
        <div className="flex flex-col lg:flex-row">
          {/* Property Image */}
          <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Premium Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-[#D4AF37] text-[#111827] px-3 py-2 rounded-lg text-xs font-semibold shadow-lg">
                Featured
              </span>
              <span className="bg-[#111827] text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-lg">
                {property.type}
              </span>
            </div>
            
            {/* Heart Icon */}
            <div className="absolute top-4 right-4">
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all duration-200 group-hover:scale-110">
                <Heart className="w-5 h-5 text-[#4B5563] group-hover:text-red-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex-1 p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
              <div className="flex-1">
                {/* Price with Gold Accent */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#111827] border-b-2 border-[#D4AF37] pb-1">
                    {formatPrice(property.price)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  {property.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center text-[#4B5563] mb-6">
                  <MapPin className="w-5 h-5 mr-3 text-[#D4AF37]" />
                  <span className="text-lg font-medium">{property.location}</span>
                </div>

                {/* Property Stats */}
                <div className="flex items-center space-x-8 text-[#4B5563] mb-6">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2 text-[#111827]" />
                    <span className="font-semibold">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2 text-[#111827]" />
                    <span className="font-semibold">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 mr-2 text-[#111827]" />
                    <span className="font-semibold">{property.area} Sqft</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#4B5563] text-lg leading-relaxed font-light mb-6">
                  {property.description}
                </p>
              </div>

              <div className="flex flex-col items-end space-y-6">
                {/* Premium Badges */}
                <div className="flex gap-3">
                  <span className="bg-[#D4AF37] text-[#111827] px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    Hot Deal
                  </span>
                  <span className="bg-gray-100 text-[#4B5563] px-4 py-2 rounded-lg text-sm font-semibold">
                    New
                  </span>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => onViewProperty(property.id)}
                  className="bg-[#111827] text-white py-4 px-8 rounded-xl hover:bg-[#1F2937] transition-all duration-200 flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl group-hover:scale-105"
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

  // Premium Grid View
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#D4AF37]">
      {/* Property Image - Covers top 2/3 of card */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Premium Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-[#D4AF37] text-[#111827] px-3 py-2 rounded-lg text-xs font-semibold shadow-lg">
            Featured
          </span>
          <span className="bg-[#111827] text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-lg">
            {property.type}
          </span>
        </div>
        
        {/* Heart Icon */}
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all duration-200 group-hover:scale-110">
            <Heart className="w-5 h-5 text-[#4B5563] group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
            <span className="text-lg font-bold text-[#111827]">{formatPrice(property.price)}</span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#111827] mb-3 line-clamp-1">
          {property.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-[#4B5563] mb-4">
          <MapPin className="w-4 h-4 mr-2 text-[#D4AF37]" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>

        {/* Property Stats */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6 text-sm text-[#4B5563]">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-2 text-[#111827]" />
              <span className="font-semibold">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2 text-[#111827]" />
              <span className="font-semibold">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-2 text-[#111827]" />
              <span className="font-semibold">{property.area} Sqft</span>
            </div>
          </div>
        </div>

        {/* Premium Badges */}
        <div className="flex gap-2 mb-6">
          <span className="bg-[#D4AF37] text-[#111827] px-3 py-2 rounded-lg text-xs font-semibold shadow-md">
            Hot Deal
          </span>
          <span className="bg-gray-100 text-[#4B5563] px-3 py-2 rounded-lg text-xs font-semibold">
            New
          </span>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewProperty(property.id)}
          className="w-full bg-[#111827] text-white py-4 px-6 rounded-xl hover:bg-[#1F2937] transition-all duration-200 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl group-hover:scale-105"
        >
          <Eye className="w-5 h-5" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
