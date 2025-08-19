# 🏠 Luminor Real Estate - Property Listing Website

A modern, elegant property listing website built with React, featuring a sophisticated design with the Modern Monochrome + Gold Accents theme.

## ✨ Features

### 🎨 **Design & Theme**
- **Modern Monochrome with Gold Accents** theme
- Elegant, luxurious appearance with premium styling
- Responsive design for all devices
- Smooth animations and transitions

### 🏗️ **Multi-Page Architecture**
- **Home Page**: Landing page with hero section and features
- **Properties Page**: Property listings with advanced filtering
- **Property Details**: Individual property information
- **Add Property**: Form to submit new properties
- **Contact Page**: Contact form and company information

### 🔍 **Property Management**
- Advanced filtering (location, price, type, bedrooms, bathrooms)
- Search functionality across titles and locations
- Grid and list view options
- Property cards with premium badges
- Detailed property information pages

### 📱 **User Experience**
- Smooth page transitions
- Responsive navigation
- Interactive elements with hover effects
- Loading states and animations
- Professional contact forms

## 🚀 **Technology Stack**

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 **Installation**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd property-listing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 **Deployment on Vercel**

### **Automatic Deployment**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with default settings

### **Manual Deployment**
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### **Vercel Configuration**
The `vercel.json` file is already configured for optimal deployment:
- Proper routing for SPA
- Build commands and output directory
- Framework detection

## 🎯 **Project Structure**

```
src/
├── components/          # React components
│   ├── LandingPage.js   # Home page
│   ├── PropertyList.js  # Properties listing
│   ├── PropertyCard.js  # Individual property card
│   ├── PropertyDetails.js # Property details page
│   ├── AddPropertyForm.js # Add property form
│   ├── ContactPage.js   # Contact page
│   ├── FilterControls.js # Advanced filters
│   ├── PageTransition.js # Page animations
│   └── LoadingSpinner.js # Loading component
├── data/
│   └── mockData.js     # Sample property data
├── App.js              # Main app with routing
└── index.js            # Entry point
```

## 🎨 **Theme Colors**

- **Background**: Light grayish white (`#F8FAFC`)
- **Primary**: Matte black (`#111827`)
- **Accent**: Metallic gold (`#D4AF37`)
- **Text**: Mid-gray (`#4B5563`)

## 📱 **Responsive Design**

- **Desktop**: Full layout with sidebars
- **Tablet**: Adaptive grid layouts
- **Mobile**: Stacked layouts with touch-friendly elements

## 🚀 **Performance Features**

- Lazy loading for images
- Smooth page transitions
- Optimized bundle size
- Efficient filtering algorithms
- Responsive image handling

## 🔧 **Customization**

### **Adding New Properties**
- Use the Add Property form
- Properties are stored in local state
- Can be extended with backend integration

### **Modifying Theme**
- Update color values in components
- Modify Tailwind classes
- Adjust spacing and typography

### **Adding New Pages**
- Create new component in `src/components/`
- Add route in `App.js`
- Update navigation if needed

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 **Support**

For support or questions, please contact us through the website's contact form.

---

**Built with ❤️ using React and Tailwind CSS** 