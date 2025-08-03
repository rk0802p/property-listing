# Property Listing Website

A modern, responsive property listing website built with React and Tailwind CSS. This application allows users to browse, filter, and add properties with a clean and intuitive interface.

## Features

- **Property Listing**: View all available properties in a responsive grid layout
- **Advanced Filtering**: Filter properties by search term, type, price range, bedrooms, and bathrooms
- **Property Details**: View detailed information about each property including features and contact options
- **Add Properties**: Add new properties with a comprehensive form
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern interface built with Tailwind CSS

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable SVG icons
- **React Scripts**: Development and build tools

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd property-listing-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Project Structure

```
src/
├── components/
│   ├── PropertyList.js      # Main property listing component
│   ├── PropertyCard.js      # Individual property card
│   ├── PropertyDetails.js   # Detailed property view
│   ├── AddPropertyForm.js   # Form for adding new properties
│   └── FilterControls.js    # Search and filter controls
├── data/
│   └── mockData.js          # Sample property data
├── App.js                   # Main application component
├── index.js                 # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## Usage

### Browsing Properties

1. The main page displays all available properties in a grid layout
2. Use the filter controls to narrow down your search:
   - Search by title or location
   - Filter by property type
   - Set price range
   - Specify minimum bedrooms and bathrooms

### Viewing Property Details

1. Click "View Details" on any property card
2. View comprehensive information including:
   - High-quality property images
   - Detailed description
   - Property features
   - Contact options

### Adding New Properties

1. Click "Add Property" in the navigation
2. Fill out the comprehensive form with:
   - Property title and location
   - Price and property type
   - Number of bedrooms and bathrooms
   - Area in square feet
   - Description and features
3. Click "Add Property" to save

## Features in Detail

### Filtering System

The application includes a powerful filtering system that allows users to:
- Search by property title or location
- Filter by property type (House, Apartment, Condo, etc.)
- Set minimum and maximum price ranges
- Specify minimum number of bedrooms and bathrooms
- Clear all filters with one click

### Responsive Design

The application is fully responsive and provides an optimal experience across all devices:
- **Desktop**: Full grid layout with side-by-side filters
- **Tablet**: Adjusted grid and filter layout
- **Mobile**: Single-column layout with collapsible filters

### Modern UI Components

- **Property Cards**: Hover effects and smooth transitions
- **Filter Controls**: Clean, organized filter interface
- **Property Details**: Rich, detailed property view
- **Add Property Form**: Comprehensive form with validation

## Customization

### Adding New Property Types

To add new property types, modify the `propertyTypes` array in `AddPropertyForm.js` and the filter options in `FilterControls.js`.

### Styling

The application uses Tailwind CSS for styling. You can customize the design by:
- Modifying Tailwind classes in components
- Updating the `tailwind.config.js` file
- Adding custom CSS in `index.css`

### Data Structure

Properties follow this structure:
```javascript
{
  id: 'unique-id',
  title: 'Property Title',
  location: 'Property Location',
  price: 450000,
  type: 'Apartment',
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  description: 'Property description...',
  image: 'image-url',
  features: ['Feature 1', 'Feature 2', ...]
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository or contact the development team. 