# ENSOLTECH Production Website

Release v1.0.0

## Project Structure

```
ensoltech_prod/
│
├── public/                          # Static assets served directly
│   └── img/                         # Image assets
│       ├── Ensoltech_logo.png      # Company logo
│       ├── equipment/               # Equipment solution images
│       ├── enproductive/            # EnProductive solution images
│       └── encycle/                 # EnCycle solution images
│
├── src/                             # Source code directory
│   ├── main.tsx                     # Application entry point
│   ├── App.tsx                      # Main App component with routing
│   │
│   ├── components/                  # React components
│   │   ├── AnimatedRoute.tsx        # Route wrapper with animations
│   │   ├── Carousel.tsx             # Image carousel component
│   │   ├── Contact.tsx              # Contact section component
│   │   ├── Footer.tsx               # Footer component
│   │   ├── Hero.tsx                 # Hero section component
│   │   ├── Home.tsx                 # Home page component
│   │   ├── Navbar.tsx               # Navigation bar component
│   │   ├── SolutionCards.tsx        # Solution cards display component
│   │   └── SolutionDropdown.tsx     # Dropdown menu for solutions
│   │
│   ├── contexts/                    # React Context providers
│   │   └── LanguageContext.tsx      # Language context (EN/KO toggle)
│   │
│   ├── data/                        # Data files
│   │   └── solutionData.ts          # Solution data definitions
│   │
│   └── styles/                      # Stylesheets
│       └── styles.css               # Global CSS styles
│
├── assets/                          # Additional assets (screenshots, etc.)
│
├── dist/                            # Build output directory (generated)
│   ├── .nojekyll                    # GitHub Pages configuration
│   ├── index.html                   # Built HTML file
│   ├── assets/                      # Built assets
│   └── img/                         # Built image assets
│
├── index.html                       # HTML template
│
├── package.json                     # NPM dependencies and scripts
├── package-lock.json                # Locked dependency versions
│
├── vite.config.ts                   # Vite build configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── vercel.json                      # Vercel deployment configuration
│
├── .gitignore                       # Git ignore rules
├── .gitattributes                   # Git attributes
│
└── README.md                         # Project documentation (this file)
```

## Key Files Description

### Entry Points

- **`src/main.tsx`**: Application entry point that renders the React app
- **`src/App.tsx`**: Main application component with routing setup and language provider

### Components

- **`Navbar.tsx`**: Navigation bar with solution dropdowns and language toggle
- **`Home.tsx`**: Home page component
- **`SolutionCards.tsx`**: Displays solution cards for equipment/enproductive/encycle routes
- **`Hero.tsx`**: Hero section component
- **`Contact.tsx`**: Contact section component
- **`Footer.tsx`**: Footer component
- **`AnimatedRoute.tsx`**: Wrapper component for route transitions
- **`SolutionDropdown.tsx`**: Dropdown menu component for solution navigation
- **`Carousel.tsx`**: Image carousel component

### Context & State Management

- **`LanguageContext.tsx`**: Provides language state (English/Korean) and toggle function
  - Default language: `'en'` (English)
  - Toggles between `'en'` and `'ko'`

### Data

- **`solutionData.ts`**: Contains solution data for equipment, enproductive, and encycle categories

### Configuration

- **`vite.config.ts`**: Vite bundler configuration
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`vercel.json`**: Vercel deployment settings
- **`package.json`**: Project dependencies and npm scripts

### Build & Deploy

- **`dist/`**: Generated build output (created by `npm run build`)
- **`.nojekyll`**: Prevents Jekyll processing on GitHub Pages

## Technology Stack

- **React 18.3.1**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

## Scripts

- `npm run dev` / `npm start`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run deploy`: Deploy to GitHub Pages
