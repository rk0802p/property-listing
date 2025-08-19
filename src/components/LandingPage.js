import React, { useState } from 'react';
import { Search, Building2, Users, Star } from 'lucide-react';

const LandingPage = ({ onViewProperties }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const stats = [
    { icon: Building2, number: '2,500+', label: 'Properties Listed' },
    { icon: Users, number: '10,000+', label: 'Happy Clients' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
  ];

  const handleSearch = () => {
    onViewProperties();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section - Clean and Light */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-[#111827]">
                Discover Your<br />
                <span className="text-[#D4AF37]">Perfect Home</span>
              </h1>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed font-light max-w-lg">
                Find your dream property with our comprehensive listings. From luxury villas to cozy apartments, 
                we have the perfect home waiting for you.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                    <input
                      type="text"
                      placeholder="Search by location, property type..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-10 pr-4 py-3 text-[#111827] border-0 focus:ring-0 focus:outline-none rounded-lg font-medium text-sm placeholder-[#9CA3AF]"
                    />
                  </div>
                  <button 
                    onClick={handleSearch}
                    className="bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-lg font-medium hover:bg-[#B8941F] transition-all duration-200 shadow-sm whitespace-nowrap"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <stat.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div className="text-2xl font-bold mb-1 text-[#111827]">{stat.number}</div>
                    <div className="text-xs text-[#4B5563] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Property"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-[#111827]">
                  <div className="text-sm text-[#4B5563] font-medium mb-1">Starting from</div>
                  <div className="text-2xl font-bold text-[#111827]">$850,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#111827] mb-4 tracking-tight">Why Choose Luminor</h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-light">
              We provide exceptional service and the best properties in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#111827] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform duration-200">
                <Building2 className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Premium Properties</h3>
              <p className="text-[#4B5563] leading-relaxed font-light text-sm">
                Access to the finest properties in the most desirable locations with exceptional quality and amenities.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#111827] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform duration-200">
                <Users className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Expert Support</h3>
              <p className="text-[#4B5563] leading-relaxed font-light text-sm">
                Professional real estate experts to guide you through every step of your property journey.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#111827] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform duration-200">
                <Star className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Trusted Service</h3>
              <p className="text-[#4B5563] leading-relaxed font-light text-sm">
                Years of experience and thousands of satisfied customers with proven track record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 