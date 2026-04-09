```markdown
## CONTEXT.md

This document provides a concise overview of the project's purpose, technical stack, architecture, and conventions.

### What This Project Does

This project is a React-based frontend application, likely a marketing website or landing page, designed to showcase information through structured sections such as a hero, features, courses, testimonials, and calls to action. It is built using a modern, component-driven approach. The project appears to be generated and managed via the "Lovable" platform, which influences deployment and development workflows.

### Tech Stack and Architecture

*   **Frontend Framework**: React with TypeScript for type-safe and component-driven UI development.
*   **Build Tool**: Vite, providing a fast development server and optimized build process.
*   **Styling**: Tailwind CSS for utility-first styling, complemented by PostCSS for transformations.
*   **UI Library**: `shadcn/ui` components, built on Radix UI primitives, ensuring accessible and highly customizable UI elements.
*   **State Management & Data**: `@tanstack/react-query` for server state management and caching; `react-hook-form` with `zod` for robust form handling and validation.
*   **Routing**: `react-router-dom` for client-side navigation.
*   **Package Management**: Primarily `npm` (as per `package-lock.json` and `README.md` instructions), though `bun.lockb` is also present.
*   **Linting**: ESLint is configured for maintaining code quality and consistency.
*   **Miscellaneous UI**: Integrates various libraries for enhanced UI/UX, including `lucide-react` (icons), `embla-carousel-react` (carousels), `recharts` (charts), `sonner` (toasts), and `vaul` (drawer component).

### Key Directories and Their Purpose

*   `public/`: Contains static assets like images, `favicon.ico`, and `robots.txt` that are served directly.
*   `src/`: The root directory for all application source code.
    *   `src/components/`: Houses application-specific, reusable React components, often composing `ui` components (e.g., `Hero`, `Navigation`, `Footer`).
    *   `src/components/ui/`: Dedicated to `shadcn/ui` components, which are foundational UI elements adapted from Radix UI primitives (e.g., `button`, `dialog`, `input`).
    *   `src/hooks/`: Stores custom React hooks that encapsulate reusable logic.
    *   `src/lib/`: Contains utility functions and helper modules (e.g., `utils.ts`).
    *   `src/pages/`: Contains top-level page components that orchestrate various sections and components (e.g., `Index.tsx`, `NotFound.tsx`).
    *   `src/App.tsx`: The main application component, often defining layout and routing.
    *   `src/main.tsx`: The entry point for the React application, responsible for rendering the root component into the DOM.
*   `tailwind.config.ts`: Configuration for Tailwind CSS.
*   `vite.config.ts`: Configuration for the Vite build tool.

### Important Conventions and Patterns

*   **Component-Driven Development**: The project strictly adheres to a component-driven architecture, favoring modular, reusable, and composable React components.
*   **Utility-First CSS**: Styling is primarily managed using Tailwind CSS utility classes, augmented by `clsx` and `tailwind-merge` for dynamic class concatenation and conflict resolution.
*   **Shadcn/ui Ecosystem**: Strong reliance on `shadcn/ui` components for consistent, accessible, and themeable UI elements, providing a clear pattern for building new UI.
*   **Separation of Concerns**: Logic is separated into custom hooks, utilities into `lib`, and UI into distinct component categories (`components` vs. `components/ui`).
*   **TypeScript Adoption**: Comprehensive use of TypeScript across the codebase to ensure type safety, improve developer experience, and reduce runtime errors.
*   **Vite Tooling**: Leveraging Vite for rapid development with Hot Module Replacement (HMR) and an optimized production build process.
```