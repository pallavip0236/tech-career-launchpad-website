# Project Context

This is a modern, client-side rendered (CSR) Single Page Application (SPA) primarily designed for building marketing websites, landing pages, or informational portals. It leverages a robust set of modern frontend tools to enable rapid development and a rich user experience. The project structure and dependencies suggest it's likely a starter or generated project from the "Lovable" platform.

## Tech Stack & Architecture

-   **Frontend Framework:** React with TypeScript for building interactive user interfaces.
-   **Build Tool:** Vite for a fast development experience with Hot Module Reloading (HMR) and optimized production builds.
-   **Styling:** Tailwind CSS for utility-first styling, providing highly customizable designs directly within JSX, complemented by PostCSS and Autoprefixer.
-   **UI Library:** shadcn/ui, a collection of re-usable UI components (e.g., buttons, forms, dialogs) built on Radix UI primitives. These components are integrated directly into the codebase for full control and customization.
-   **Routing:** React Router DOM for managing client-side navigation between different application pages.
-   **State Management/Data Fetching:** `@tanstack/react-query` is included for server state management and efficient data fetching.
-   **Form Management:** `react-hook-form` for robust form validation and handling, paired with `zod` for schema validation.
-   **Package Manager:** Primarily `npm` as indicated by `package.json` scripts and `package-lock.json`, though `bun.lockb` suggests Bun might also be used.
-   **Linting:** ESLint with TypeScript ESLint for maintaining code quality and consistency across the project.

The architecture follows a standard component-based approach, common in modern React SPAs, with clear separation of concerns for pages, application-specific components, generic UI components, and utility functions.

## Key Directories

-   `public/`: Contains static assets like `favicon.ico`, `robots.txt`, and placeholder images, served directly by the web server.
-   `src/`: The core application source code.
    -   `src/main.tsx`: The entry point for the React application, responsible for mounting the root `App` component.
    -   `src/App.tsx`: The root component, typically handling global layout, routing, and context providers.
    -   `src/index.css`: Global CSS styles, including the Tailwind CSS directives.
    -   `src/components/`: Houses reusable React components specific to the application's domain (e.g., `Hero`, `Navigation`, `Footer`).
        -   `src/components/ui/`: Contains the shadcn/ui components (e.g., `button.tsx`, `dialog.tsx`). These are generic, highly-reusable UI primitives that can be customized.
    -   `src/pages/`: Stores top-level page components, each representing a distinct route or view in the application (e.g., `Index.tsx` for the homepage, `NotFound.tsx`).
    -   `src/hooks/`: Custom React hooks for encapsulating and reusing stateful logic across components.
    -   `src/lib/`: Utility functions and helper modules (e.g., `utils.ts` for CSS class merging with `clsx` and `tailwind-merge`).
-   `tailwind.config.ts`: Configuration file for Tailwind CSS, including theme extensions and plugin definitions.
-   `vite.config.ts`: Configuration for the Vite build tool, including plugins and build options.
-   `tsconfig*.json`: TypeScript compiler configuration files for the project and its various build contexts.
-   `eslint.config.js`: ESLint configuration for code linting rules.
-   `components.json`: A configuration file likely used by shadcn/ui for managing component paths and theming settings.

## Important Conventions & Patterns

-   **Component-Driven Development:** Emphasizes building user interfaces by breaking them down into small, reusable, and self-contained React components.
-   **Utility-First CSS:** Styling is predominantly managed using Tailwind CSS utility classes applied directly within JSX, promoting consistent and rapid UI development.
-   **TypeScript Everywhere:** Strong typing is enforced throughout the codebase, leveraging TypeScript to enhance code quality, catch errors early, and improve developer experience.
-   **shadcn/ui Integration:** shadcn/ui components are directly copied into the `src/components/ui` directory, which allows for direct modification, theming, and full control over their implementation, rather than using them as black-box dependencies.
-   **Modularity:** The project follows a modular structure, separating different concerns into dedicated directories (components, pages, hooks, lib) to improve code organization, maintainability, and reusability.
-   **Vite Development Workflow:** Leverages Vite for its extremely fast cold start times and efficient hot module reloading, significantly improving developer productivity.

## Recent Updates

-   **Sprint Completion:** The project was updated to reflect the completion of sprint work, including ticket SCRUM-430.