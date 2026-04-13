# CONTEXT

This project is a **modern, responsive web application** designed as a marketing site or informational landing page. It showcases features, courses, testimonials, and calls-to-action, leveraging a robust frontend stack to deliver a fast and engaging user experience.

## Tech Stack & Architecture

*   **Frontend**: React.js with TypeScript (`.tsx` files).
*   **Build Tool**: Vite, providing a fast development server and optimized production builds (`vite.config.ts`).
*   **Styling**: Tailwind CSS for utility-first styling (`tailwind.config.ts`, `postcss.config.js`), enhanced with PostCSS and `tailwindcss-animate`. Utilities like `clsx` and `tailwind-merge` are used for efficient class management.
*   **UI Components**: `shadcn-ui`, a collection of customizable, accessible UI components built on top of Radix UI primitives. These are integrated directly into the project's source (`src/components/ui`) for full control.
*   **Routing**: React Router DOM for client-side navigation (`react-router-dom`).
*   **Forms**: React Hook Form with Zod for schema validation.
*   **Data Fetching**: `@tanstack/react-query` is included, suggesting potential for advanced client-side data management, though the current structure appears largely static.
*   **Linting**: ESLint for code quality and consistency (`eslint.config.js`).

The project follows a **Single-Page Application (SPA)** architecture, with a component-based structure for modularity and maintainability.

## Key Directories

*   **`public/`**: Contains static assets like favicons, placeholder images, and `robots.txt`.
*   **`src/`**: The main application source code.
    *   **`src/App.tsx`**: The root component, typically handling application layout and routing.
    *   **`src/main.tsx`**: The application's entry point, responsible for mounting the React app.
    *   **`src/components/`**: Houses reusable React components.
        *   **`src/components/ui/`**: Contains the project's customized `shadcn-ui` components.
    *   **`src/pages/`**: Top-level page components, defining specific routes or views (e.g., `Index`, `NotFound`).
    *   **`src/hooks/`**: Custom React hooks for encapsulating reusable logic.
    *   **`src/lib/`**: Utility functions and helper modules (e.g., `utils.ts` for CSS class manipulation).
    *   **`src/index.css`, `src/App.css`**: Global and application-specific styles, including Tailwind CSS directives.
*   **`components.json`**: Configuration file for `shadcn-ui`, managing component imports and customizations.
*   **`tsconfig*.json`**: TypeScript compiler configuration files.

## Conventions and Patterns

*   **Component-Oriented Development**: Strong emphasis on modular and reusable React components, particularly with `shadcn-ui` facilitating atomic design principles.
*   **Utility-First CSS**: Styling is primarily applied using Tailwind CSS utility classes directly within JSX, promoting consistency and rapid development.
*   **Type Safety**: Extensive use of TypeScript throughout the codebase to ensure type safety and improve developer experience.
*   **Local `shadcn-ui` Integration**: `shadcn-ui` components are managed locally within `src/components/ui`, allowing for deep customization and consistency with the project's design system.
*   **Custom Hooks**: Logic encapsulation into custom hooks (`src/hooks`) for improved reusability and cleaner functional components.
*   **Client-Side Routing**: `react-router-dom` is used for declarative routing, enabling seamless navigation within the SPA.
*   **Vite Tooling**: Leveraging Vite for a modern, performant development and build experience.