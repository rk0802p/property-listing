import React from 'react';
import { ArrowLeft, Bed, Bath, Square, MapPin, Check } from 'lucide-react';

const PropertyDetails = ({ property, onBack }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#4B5563] hover:text-[#111827] mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Properties
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-96">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#111827] text-[#D4AF37] px-3 py-1 rounded-md text-sm font-medium">
              {property.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-white text-[#111827] px-3 py-1 rounded-md text-sm font-medium shadow-lg">
              {formatPrice(property.price)}
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-[#111827] mb-2">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{property.location}</span>
            </div>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Bed className="w-6 h-6 text-[#D4AF37] mr-3" />
              <div>
                <p className="text-sm text-[#4B5563]">Bedrooms</p>
                <p className="text-lg font-semibold text-[#111827]">
                  {property.bedrooms}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Bath className="w-6 h-6 text-[#D4AF37] mr-3" />
              <div>
                <p className="text-sm text-[#4B5563]">Bathrooms</p>
                <p className="text-lg font-semibold text-[#111827]">
                  {property.bathrooms}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Square className="w-6 h-6 text-[#D4AF37] mr-3" />
              <div>
                <p className="text-sm text-[#4B5563]">Area</p>
                <p className="text-lg font-semibold text-[#111827]">
                  {property.area} sq ft
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 text-[#D4AF37] mr-3 flex items-center justify-center">
                <span className="text-lg font-bold">$</span>
              </div>
              <div>
                <p className="text-sm text-[#4B5563]">Price</p>
                <p className="text-lg font-semibold text-[#111827]">
                  {formatPrice(property.price)}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#111827] mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold text-[#111827] mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Interested in this property?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact us for more information or to schedule a viewing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-lg hover:bg-[#B8941F] transition-colors font-medium">
                  Contact Agent
                </button>
                <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#111827] transition-colors font-medium">
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails; 