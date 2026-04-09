### What this project does

This project is a modern, responsive web application, likely a marketing site or landing page, designed to showcase information, products, or services. It features common website sections such as a hero, features, courses, testimonials, and calls to action, providing a comprehensive and engaging user experience.

### Tech Stack & Architecture

*   **Frontend**: React.js with TypeScript for robust, component-based development.
*   **Build Tool**: Vite for a fast development server and optimized production builds.
*   **Styling**: Tailwind CSS for utility-first styling, configured with PostCSS and Autoprefixer.
*   **UI Library**: `shadcn/ui`, built on Radix UI primitives, providing accessible and customizable UI components that are integrated directly into the project.
*   **Routing**: React Router DOM for client-side navigation.
*   **Data Management**: Utilizes `@tanstack/react-query` for efficient server state management and data fetching.
*   **Forms & Validation**: `react-hook-form` paired with `zod` for robust form handling and schema validation.
*   **Architecture**: A standard client-side rendered (CSR) Single Page Application (SPA) structure, organizing code logically into components, pages, hooks, and utility modules.

### Key Directories and Their Purpose

*   `public/`: Stores static assets like `favicon.ico`, `robots.txt`, and placeholder images.
*   `src/`: Contains all application source code.
    *   `src/components/`: Houses higher-level, often page-section specific, React components (e.g., `Hero`, `Courses`, `Navigation`).
    *   `src/components/ui/`: Contains the `shadcn/ui` components, typically generated or copied into the project and customized locally.
    *   `src/hooks/`: Custom React hooks for encapsulating and reusing stateful logic across components.
    *   `src/lib/`: Utility functions and helper modules (e.g., `utils.ts` for common helpers).
    *   `src/pages/`: Defines top-level page components that correspond to different routes (e.g., `Index.tsx`, `NotFound.tsx`).
    *   `src/main.tsx`: The main entry point for the React application, responsible for rendering the root component.
    *   `src/App.tsx`: The root component, often where global layout, routing, and context providers are configured.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS.
*   `vite.config.ts`: Configuration file for the Vite build tool.
*   `components.json`: Configuration file specifically used by `shadcn/ui` for component management.
*   `package.json`: Lists project metadata, scripts, and all dependencies.

### Important Conventions and Patterns

*   **Component-Driven Development**: UI is built as a collection of modular, reusable React components, promoting maintainability and scalability.
*   **`shadcn/ui` Integration**: UI elements are primarily sourced from `shadcn/ui`, ensuring consistency, accessibility, and easy customization via Tailwind CSS.
*   **TypeScript-First**: The entire codebase is written in TypeScript, enforcing type safety, enhancing code quality, and improving developer experience.
*   **Utility-First Styling**: Tailwind CSS is extensively used for styling, allowing rapid UI development by applying utility classes directly in JSX, often combined with `clsx` and `tailwind-merge` for dynamic class concatenation.
*   **Code Quality**: ESLint is configured to enforce consistent code style and identify potential issues, contributing to a cleaner codebase.
*   **Lovable Platform**: This project is integrated with the Lovable platform, which can manage the project lifecycle, including generation, editing, and deployment.