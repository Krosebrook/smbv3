# SoleMuchBetter - Corporate Branding Website

## Overview

SoleMuchBetter is a women-owned corporate branding company that specializes in custom promotional products, corporate gifting, and branded merchandise. The website is built as a modern React single-page application showcasing their services including custom shoes, corporate events, branded products, and comprehensive branding solutions. The site emphasizes their unique value proposition of delivering "distinctive high-impact merchandise that elevates your brand beyond the norm" with a complete workflow from quote to fulfillment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18.3.1 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/UI components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and brand colors (red: #E53E3E, navy: #1A365D)
- **Routing**: React Router DOM for client-side navigation with catch-all 404 handling
- **State Management**: React hooks and context for local state, TanStack React Query for server state management

### Component Architecture
- **Design System**: Modular component library using shadcn/ui with custom variants
- **Layout Structure**: Fixed navigation, hero section, multiple content sections, and footer
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Skip navigation, proper ARIA labels, keyboard navigation support, and semantic HTML

### SEO and Performance
- **Meta Tags**: Comprehensive Open Graph and Twitter Card implementations
- **Structured Data**: Schema.org markup for organization and services
- **Performance**: Image preloading, lazy loading, and optimized asset delivery
- **Analytics Ready**: Google Fonts integration and social media meta tags

### Development Environment
- **TypeScript Configuration**: Strict mode disabled for flexibility, path aliases for clean imports
- **Code Quality**: ESLint configuration with React hooks and TypeScript rules
- **Development Server**: Vite dev server with hot module replacement on port 5000

### Content Sections
- **Hero Section**: Brand messaging with call-to-action buttons and product imagery
- **Services Showcase**: Custom shoes, corporate events, branded products, and fulfillment services
- **Company Information**: About section, testimonials, and brand showcase
- **Contact Forms**: Newsletter signup and comprehensive contact form with validation
- **Navigation**: Smooth scrolling between sections with enhanced user experience

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Accessible component primitives for dialogs, forms, navigation, and interactions
- **Lucide React**: Consistent icon library for UI elements and visual indicators
- **Class Variance Authority**: Type-safe component variants and styling system

### Form Management
- **React Hook Form**: Performant forms with validation and error handling
- **Zod**: Schema validation for form inputs and data validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Development Tools
- **TypeScript**: Static type checking and enhanced development experience
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
- **Embla Carousel**: Touch-friendly carousel component for content display

### Build and Deployment
- **Vite**: Fast build tool and development server optimized for React
- **Serve**: Static file server for production deployment
- **Lovable Tagger**: Development component tagging for enhanced debugging