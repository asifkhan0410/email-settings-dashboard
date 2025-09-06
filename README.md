# Email Settings Interface

A pixel-perfect React implementation of an email account settings interface, built with modern React practices and Tailwind CSS.

## Project Overview

This project recreates a comprehensive email management interface that allows users to:
- View and manage their email addresses with status badges
- Configure primary and backup email settings
- Toggle email privacy settings
- Interactive dropdown menus and context menus

## Component Architecture

The application is structured using a modular component architecture:

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with back button
│   ├── Badge.tsx           # Status badges (PRIMARY, VERIFIED, UNVERIFIED)
│   ├── MoreMenu.tsx        # Context menu for email actions
│   ├── Toggle.tsx          # Toggle switch component
│   ├── Dropdown.tsx        # Custom dropdown with keyboard navigation
│   ├── EmailItem.tsx       # Individual email list item
│   ├── EmailList.tsx       # Container for email items
│   └── EmailSettings.tsx   # Email configuration settings
├── App.tsx                 # Main application component
└── index.css              # Tailwind CSS imports
```

## Key Features

### 🎨 **Pixel-Perfect Design**
- Exact recreation of the provided mockup
- Proper spacing, typography, and color schemes
- Responsive design for all screen sizes

### 🔧 **Interactive Components**
- **Dropdown Menus**: Custom implementation with keyboard navigation and click-outside handling
- **Context Menus**: Three-dot menu with Manage/Remove options
- **Toggle Switch**: Smooth animated toggle for privacy settings
- **Status Badges**: Color-coded badges for email verification status

### ♿ **Accessibility**
- Semantic HTML structure
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management

### 🎭 **Animations & Interactions**
- Smooth hover effects on interactive elements
- Animated dropdown and menu transitions
- Toggle switch animations
- Button state feedback

## Technical Implementation

### State Management
- React hooks for local state management
- Controlled components for form inputs
- Efficient re-rendering optimization

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom component variants for consistency
- Responsive design with mobile-first approach

### TypeScript Integration
- Full type safety throughout the application
- Interface definitions for all data structures
- Proper typing for event handlers and props

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd email-settings-interface
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

## Build for Production

```bash
npm run build
```

The optimized production build will be available in the `dist/` directory.

## Design Decisions

### **Component Isolation**
Each UI element is isolated into its own component for maximum reusability and maintainability.

### **Custom Components vs Libraries**
Built custom dropdown and menu components to match the exact design specifications rather than using external libraries.

### **State Architecture**
Used local React state for this demo, but the architecture easily supports integration with state management libraries like Redux or Zustand.

### **Accessibility First**
Implemented proper ARIA labels, keyboard navigation, and semantic HTML from the ground up.

### **Performance Optimizations**
- Click-outside handlers with proper cleanup
- Efficient re-rendering patterns
- Optimized Tailwind CSS output

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for screen sizes from 320px to 2560px+

## Future Enhancements

- Email validation and verification flows
- Drag-and-drop email reordering
- Email template management
- Integration with backend APIs
- Advanced accessibility features
- Internationalization support

## License

MIT License - feel free to use this code for learning and production projects.