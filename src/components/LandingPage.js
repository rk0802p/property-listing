import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Users, Star, MapPin, Clock, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
                Find Your Dream
                <span className="text-[#D4AF37]"> Property</span>
              </h1>
              <p className="text-lg text-[#4B5563] mb-8 max-w-lg leading-relaxed">
                Discover exclusive properties in the most desirable locations. From luxury penthouses to family homes, we have the perfect property waiting for you.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8 shadow-sm">
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4B5563]" />
                    <input
                      type="text"
                      placeholder="Search by location, property type..."
                      className="w-full pl-10 pr-4 py-3 border-0 focus:ring-0 text-[#111827] placeholder-[#9CA3AF] font-medium text-sm"
                    />
                  </div>
                  <Link
                    to="/properties"
                    className="bg-[#111827] text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-[#1F2937] transition-all duration-200 whitespace-nowrap"
                  >
                    Search Properties
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="w-6 h-6 text-[#D4AF37] mb-3 mx-auto">
                    <Building2 className="w-full h-full" />
                  </div>
                  <div className="text-2xl font-bold mb-1 text-[#111827]">500+</div>
                  <div className="text-sm text-[#4B5563]">Properties</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 text-[#D4AF37] mb-3 mx-auto">
                    <MapPin className="w-full h-full" />
                  </div>
                  <div className="text-2xl font-bold mb-1 text-[#111827]">25+</div>
                  <div className="text-sm text-[#4B5563]">Cities</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 text-[#D4AF37] mb-3 mx-auto">
                    <Star className="w-full h-full" />
                  </div>
                  <div className="text-2xl font-bold mb-1 text-[#111827]">1000+</div>
                  <div className="text-sm text-[#4B5563]">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Property"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-[#111827]">$2.5M</div>
                <div className="text-sm text-[#4B5563]">Starting from</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">Why Choose Luminor?</h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              We're not just selling properties; we're helping you find your perfect home and investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#111827] rounded-xl flex items-center justify-center mb-4 shadow-md mx-auto group-hover:scale-105 transition-transform duration-200">
                <Search className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Expert Guidance</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Our experienced team provides personalized guidance throughout your property journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#111827] rounded-xl flex items-center justify-center mb-4 shadow-md mx-auto group-hover:scale-105 transition-transform duration-200">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Trusted Partners</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                We work with verified sellers and conduct thorough property inspections.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#111827] rounded-xl flex items-center justify-center mb-4 shadow-md mx-auto group-hover:scale-105 transition-transform duration-200">
                <Clock className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">24/7 Support</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Round-the-clock support to answer your questions and assist with viewings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#111827] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect home with Luminor Real Estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-[#D4AF37] text-[#111827] px-8 py-4 rounded-xl font-semibold hover:bg-[#B8941F] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#111827] transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 