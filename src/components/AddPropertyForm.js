import React, { useState } from 'react';
import { ArrowLeft, Save, X, Plus } from 'lucide-react';

const AddPropertyForm = ({ onAddProperty, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    type: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    description: '',
    features: []
  });

  const [newFeature, setNewFeature] = useState('');

  const propertyTypes = [
    'House',
    'Apartment',
    'Condo',
    'Townhouse',
    'Penthouse',
    'Studio',
    'Villa',
    'Office'
  ];

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleAddFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData({
        ...formData,
        features: [...formData.features, newFeature.trim()]
      });
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (featureToRemove) => {
    setFormData({
      ...formData,
      features: formData.features.filter(feature => feature !== featureToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['title', 'location', 'price', 'type', 'bedrooms', 'bathrooms', 'area'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Convert numeric fields
    const propertyData = {
      ...formData,
      price: parseInt(formData.price),
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      area: parseInt(formData.area)
    };

    onAddProperty(propertyData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onCancel}
          className="flex items-center gap-3 text-[#4B5563] hover:text-[#111827] transition-all duration-200 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Properties
        </button>
        <h1 className="text-4xl font-bold text-[#111827] tracking-tight">Add New Property</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Title */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Property Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter property title"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Location *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="Enter property location"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Price *
            </label>
            <input
              type="number"
              required
              min="1000"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              placeholder="Enter property price"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Property Type *
            </label>
            <select
              required
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            >
              <option value="">Select type</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Bedrooms *
            </label>
            <select
              required
              value={formData.bedrooms}
              onChange={(e) => handleInputChange('bedrooms', e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            >
              <option value="">Select bedrooms</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Bathrooms *
            </label>
            <select
              required
              value={formData.bathrooms}
              onChange={(e) => handleInputChange('bathrooms', e.target.value)}
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            >
              <option value="">Select bathrooms</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Area */}
          <div>
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Area (sq ft) *
            </label>
            <input
              type="number"
              required
              min="100"
              value={formData.area}
              onChange={(e) => handleInputChange('area', e.target.value)}
              placeholder="Property area"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter property description"
              rows="4"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
            />
          </div>

          {/* Features */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-[#111827] mb-3">
              Features
            </label>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add a feature"
                className="flex-1 px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827]"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-6 py-4 bg-[#D4AF37] text-[#111827] rounded-xl hover:bg-[#B8941F] transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            
            {/* Features List */}
            {formData.features.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {formData.features.map((feature, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(feature)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 mt-10 pt-8 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-4 bg-[#D4AF37] text-[#111827] rounded-xl hover:bg-[#B8941F] transition-all duration-200 flex items-center gap-3 font-semibold shadow-lg"
          >
            <Save className="w-5 h-5" />
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyForm; 