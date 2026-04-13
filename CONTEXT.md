This document outlines the core technical context of the project, updated following the completion of sprint SCRUM-428.

### Project Overview
This project is a modern, client-side rendered (CSR) web application, likely a marketing site, landing page, or informational portal (e.g., for an educational platform or business showcase given components like `Courses`, `Features`, `Testimonials`). It provides a responsive and interactive user experience.

### Tech Stack & Architecture
*   **Frontend Framework**: React with TypeScript.
*   **Build Tool**: Vite for fast development and optimized builds.
*   **UI Library**: shadcn-ui, which is built on top of Radix UI primitives, providing accessible and highly customizable UI components.
*   **Styling**: Tailwind CSS for a utility-first CSS approach, complemented by `tailwindcss-animate` for smooth transitions.
*   **Routing**: React Router DOM for client-side navigation.
*   **State Management**: TanStack Query is used for managing server-side state, enabling efficient data fetching, caching, and synchronization.
*   **Form Management**: React Hook Form with Zod for robust form handling and schema-based validation.
*   **Utilities**: `clsx` and `tailwind-merge` for conditional class joining, `date-fns` for date manipulation, `sonner` for toasts, and `recharts` for data visualization.
*   **Theming**: `next-themes` indicates support for light/dark mode.

The application follows a component-based architecture, with distinct directories for pages, shared application components, a dedicated UI component library, and custom hooks.

### Key Directories and Their Purpose
*   `src/`: Contains all application source code.
    *   `src/main.tsx`: The main entry point for the React application, responsible for rendering the root component.
    *   `src/App.tsx`: The root component, typically orchestrating routing and global layout.
    *   `src/pages/`: Houses page-level components, each representing a distinct route in the application (e.g., `Index.tsx`, `NotFound.tsx`).
    *   `src/components/`: Stores reusable, higher-level application components (e.g., `Hero`, `Navigation`, `Footer`).
    *   `src/components/ui/`: Contains the customized shadcn-ui components, generated or adapted from the shadcn-ui library, providing a consistent design system.
    *   `src/hooks/`: Dedicated to custom React hooks for encapsulating and reusing stateful logic.
    *   `src/lib/`: Holds utility functions and helpers, such as `utils.ts` for class merging.
    *   `src/index.css`, `src/App.css`: Global and application-specific CSS styles.
*   `public/`: Serves static assets like images, favicons, and `robots.txt` directly.
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS.
*   `vite.config.ts`: Configuration for the Vite build tool.
*   `tsconfig.json*`: TypeScript configuration files for compiler settings.
*   `eslint.config.js`: ESLint configuration for code linting and style enforcement.
*   `components.json`: Configuration file for shadcn-ui component management and setup.

### Important Conventions and Patterns
*   **Component-Driven Development**: The UI is built from modular, reusable React components, promoting maintainability.
*   **Shadcn-ui & Radix UI**: Adherence to a consistent, accessible design system using shadcn-ui components, which are built upon headless Radix UI primitives. The "lift and shift" pattern for `src/components/ui` allows for deep customization.
*   **Utility-First CSS**: Styling is primarily managed using Tailwind CSS classes applied directly in JSX, enabling rapid UI development.
*   **TypeScript**: Strong typing is enforced throughout the codebase for improved maintainability, reduced runtime errors, and better developer experience.
*   **Code Linting**: ESLint is configured to maintain code quality, consistency, and best practices.
*   **Declarative Routing**: Leverages React Router DOM for clean and declarative client-side navigation.
*   **Server State Management**: Uses TanStack Query for efficient and robust management of server-side data, including caching, background refetching, and error handling.
*   **Form Validation**: Utilizes `react-hook-form` combined with `zod` for robust, schema-based form validation and submission.
*   **Custom Hooks for Logic Reusability**: Common logic is extracted into custom hooks in `src/hooks/` to promote code reuse and separation of concerns.