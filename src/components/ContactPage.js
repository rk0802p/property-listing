import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building2, MessageCircle, User, Mail as MailIcon } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="space-y-16">
      {/* Elegant Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#111827] tracking-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-[#4B5563] font-light max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you. Fill out the form below or visit us at our office. 
          Our team is here to help you find your perfect property.
        </p>
      </div>

      {/* Main Contact Section - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form - Left Side (2/3) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-[#111827] rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#111827]">Send us a Message</h2>
                <p className="text-[#4B5563] font-light">We'll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#111827] mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111827] mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <MailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-3">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-medium text-[#111827] transition-all duration-200 resize-none"
                  placeholder="Tell us about your property needs, questions, or how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#111827] text-white py-4 px-8 rounded-xl hover:bg-[#1F2937] transition-all duration-200 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details - Right Side (1/3) */}
        <div className="space-y-6">
          {/* Company Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#111827] rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">Luminor Real Estate</h3>
                <p className="text-[#4B5563] text-sm">Your Trusted Property Partner</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#111827] font-semibold">Office Address</p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    <br />
                    Los Angeles, CA <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-[#111827] font-semibold">Phone</p>
                  <a 
                    href="tel:" 
                    className="text-[#4B5563] text-sm hover:text-[#111827] transition-colors duration-200"
                  >
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-[#111827] font-semibold">Email</p>
                  <a 
                    href="mailto:gmail.com" 
                    className="text-[#4B5563] text-sm hover:text-[#111827] transition-colors duration-200 border-b border-transparent hover:border-[#D4AF37]"
                  >
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-[#111827] font-semibold">Business Hours</p>
                  <p className="text-[#4B5563] text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h4 className="text-lg font-bold text-[#111827] mb-4">Need Immediate Help?</h4>
            <p className="text-[#4B5563] text-sm mb-4">
              For urgent inquiries or to schedule a property viewing, call us directly.
            </p>
            <button className="w-full bg-[#D4AF37] text-[#111827] py-3 px-6 rounded-xl hover:bg-[#B8941F] transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - FAQ Quick Links */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              question: "How do I schedule a property viewing?",
              answer: "Contact us through the form above or call us directly to schedule a viewing at your convenience."
            },
            {
              question: "What documents do I need to rent/buy?",
              answer: "We'll guide you through all required documentation based on your specific situation and needs."
            },
            {
              question: "Do you offer virtual tours?",
              answer: "Yes! We provide virtual tours for properties and can arrange video calls for remote viewings."
            },
            {
              question: "What areas do you cover?",
              answer: "We specialize in Los Angeles, Malibu, Santa Monica, San Diego, and Beverly Hills areas."
            },
            {
              question: "How quickly can you help me find a property?",
              answer: "Our average time to find the perfect property is 2-4 weeks, depending on your requirements."
            },
            {
              question: "Do you handle international clients?",
              answer: "Absolutely! We have experience working with international clients and can assist with all arrangements."
            }
          ].map((faq, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-100 hover:border-[#D4AF37] transition-all duration-200">
              <h4 className="font-semibold text-[#111827] mb-2">{faq.question}</h4>
              <p className="text-[#4B5563] text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
