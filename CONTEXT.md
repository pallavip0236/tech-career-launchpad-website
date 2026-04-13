### Project Overview

This project is a modern, single-page application (SPA) built as a marketing or landing page. It showcases features, courses, testimonials, and calls to action, typical for a product, service, or educational platform. The application is designed with a component-driven approach, prioritizing a performant, accessible, and maintainable user interface.

### Tech Stack and Architecture

The application leverages a robust frontend ecosystem:

*   **Framework**: React.js for building interactive user interfaces.
*   **Language**: TypeScript for type safety and improved developer experience.
*   **Build Tool**: Vite for a fast development server and optimized production builds.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, complemented by PostCSS for efficient CSS processing.
*   **UI Components**: `shadcn-ui`, a collection of re-usable components built on accessible Radix UI primitives and styled with Tailwind CSS, forms the core UI library.
*   **Routing**: React Router DOM handles client-side navigation.
*   **Form Management**: React Hook Form combined with Zod for robust form validation.
*   **Data Fetching**: `@tanstack/react-query` is included for potential client-side data caching and synchronization.
*   **Package Manager**: Primarily uses `npm`, though `bun.lockb` is also present, indicating potential flexibility or past usage of Bun.

The architecture follows a standard component-based pattern, separating application concerns into top-level pages, reusable UI sections, and atomic UI components.

### Key Directories and Their Purpose

*   `public/`: Stores static assets such as `favicon.ico`, `robots.txt`, and placeholder images.
*   `src/`: Contains all application source code.
    *   `src/main.tsx`: The entry point for the React application.
    *   `src/App.tsx`: The root component of the application, often responsible for layout or routing.
    *   `src/pages/`: Houses top-level page components, typically mapped to specific routes (e.g., `Index.tsx`, `NotFound.tsx`).
    *   `src/components/`: Contains larger, section-level components that compose smaller UI elements to form distinct parts of a page (e.g., `Hero`, `Courses`, `Navigation`, `Footer`).
    *   `src/components/ui/`: Dedicated to `shadcn-ui` components. These are typically highly reusable, atomic UI primitives (e.g., `button`, `card`, `dialog`, `input`) that have been copied into the project for full customization.
    *   `src/hooks/`: Stores custom React hooks to encapsulate reusable logic (e.g., `use-toast`, `use-mobile`).
    *   `src/lib/`: Holds utility functions and helper modules (e.g., `utils.ts`).
    *   `src/index.css`, `src/App.css`: Global styles and application-wide CSS definitions.
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS.
*   `vite.config.ts`: Configuration for the Vite build tool.

### Important Conventions and Patterns

*   **Component-Driven Development**: Heavy reliance on modular React components for structure and reusability.
*   **`shadcn-ui` Integration**: UI components are sourced from `shadcn-ui` and reside within `src/components/ui/`, allowing direct modification and full control over their styling and behavior.
*   **Utility-First Styling**: Tailwind CSS classes are predominantly used directly within JSX for styling, minimizing custom CSS.
*   **TypeScript**: Strict type checking is enforced across the codebase for improved code quality and maintainability.
*   **Vite for Development**: The `npm run dev` script leverages Vite for a rapid development server with Hot Module Replacement (HMR).
*   **ESLint**: Configured for consistent code style and to identify potential code issues.
*   **"Lovable" Project**: The project's `README.md` indicates it is managed via the "Lovable" platform, which integrates with the Git repository for development and deployment.