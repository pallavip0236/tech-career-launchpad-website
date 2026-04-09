```markdown
This project is a modern, responsive single-page application (SPA) designed as a marketing site or landing page, likely for a course or service, showcasing features, testimonials, and calls to action.

### Tech Stack and Architecture
The application is built as a client-side React SPA, utilizing:
*   **Vite**: For fast development and optimized bundling.
*   **TypeScript**: Ensuring type safety throughout the codebase.
*   **React**: The core library for building user interfaces with a component-based architecture.
*   **shadcn-ui / Radix UI**: Provides a set of accessible and customizable UI components, built on Radix UI primitives and styled with Tailwind CSS.
*   **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling.
*   **React Router**: For declarative client-side routing (`react-router-dom`).
*   **React Hook Form & Zod**: For form validation and management.
*   **TanStack React Query**: Potentially for data fetching and state management.

### Key Directories and Their Purpose
*   **`src/`**: Contains all application source code.
    *   **`src/components/`**: Houses higher-level, application-specific components that compose UI primitives (e.g., `Hero`, `Courses`, `Navigation`).
    *   **`src/components/ui/`**: Contains the re-usable UI primitive components, primarily derived from shadcn-ui (e.g., `button`, `card`, `dialog`).
    *   **`src/pages/`**: Defines top-level components that represent distinct routes or views of the application (e.g., `Index.tsx` for the homepage, `NotFound.tsx`).
    *   **`src/hooks/`**: Custom React hooks to encapsulate reusable logic (e.g., `use-toast`, `use-mobile`).
    *   **`src/lib/`**: Utility functions and helper modules (e.g., `utils.ts`).
    *   **`src/main.tsx`**: The entry point of the React application.
    *   **`src/App.tsx`**: The main application component, often responsible for layout and routing.
*   **`public/`**: Static assets that are served directly (e.g., `favicon.ico`, `robots.txt`).
*   **Configuration Files**:
    *   `vite.config.ts`: Vite build and development configuration.
    *   `tailwind.config.ts`, `postcss.config.js`: Tailwind CSS and PostCSS configuration.
    *   `tsconfig.json`, `tsconfig.app.json`: TypeScript compiler settings.
    *   `eslint.config.js`: ESLint configuration for code quality.

### Important Conventions or Patterns
*   **Component-Driven Development**: The application is structured around reusable and composable React components, separating concerns into logical units.
*   **Shadcn-UI Integration**: UI components from `src/components/ui` are generated/managed via `components.json`, following the shadcn-ui pattern of being directly modifiable and extendable within the project.
*   **Tailwind CSS First**: Styling is predominantly handled using Tailwind CSS utility classes, often augmented with `clsx` and `tailwind-merge` for conditional styling and conflict resolution.
*   **TypeScript for Robustness**: A strong emphasis on type safety and developer experience through the consistent use of TypeScript.
*   **Vite-based Tooling**: Leveraging Vite's fast HMR and optimized build process for efficient development.
*   **Centralized Routing**: Application routes are likely defined and managed within `src/App.tsx` or a dedicated routing file using `react-router-dom`.
```