```markdown
# CONTEXT

This project is a modern, component-based web application, likely serving as a landing page or an informational website. It is designed to showcase various sections typical of a marketing or portfolio site (e.g., Hero, Features, Courses, Testimonials, CTA, About), emphasizing a responsive and accessible user interface.

## Tech Stack and Architecture

*   **Frontend**: React.js with TypeScript for robust, type-safe component development.
*   **Build Tool**: Vite, providing a fast development server and optimized production builds.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, configured via PostCSS.
*   **UI Component Library**: shadcn/ui, which leverages Radix UI primitives and Tailwind CSS to provide a collection of accessible, customizable, and high-quality UI components.
*   **Routing**: React Router DOM handles client-side navigation for a Single-Page Application (SPA) experience.
*   **Form Management**: React Hook Form is used for form handling, complemented by Zod for schema validation.
*   **Data Fetching**: `@tanstack/react-query` is included, providing capabilities for efficient asynchronous data management and caching.
*   **Authentication**: A custom authentication context (`AuthContext`) is used to manage user sessions, providing global access to authentication state and enabling protected routes.
*   **Platform Integration**: Developed and deployable through the Lovable platform, as indicated by the `README.md`.
*   **Architecture**: A modular, component-driven SPA, where `pages` compose various `components` that often utilize `shadcn/ui` building blocks.

## Key Directories and Their Purpose

*   `public/`: Contains static assets (e.g., `favicon.ico`, images, `robots.txt`) served directly by the web server.
*   `src/`: The main application source code directory.
    *   `src/main.tsx`: The entry point for the React application, responsible for rendering the root component.
    *   `src/App.tsx`: The top-level application component, typically defining global layouts and routing.
    *   `src/pages/`: Contains top-level page components, each corresponding to a distinct route or view (e.g., `Index.tsx`, `NotFound.tsx`).
    *   `src/components/`: Houses reusable, domain-specific UI components (e.g., `Hero`, `Navigation`, `Footer`, `CTA`).
    *   `src/components/ui/`: A dedicated collection of shadcn/ui components, acting as the foundational UI kit for the application. These are often generated or customized.
    *   `src/hooks/`: Custom React hooks used to encapsulate and reuse stateful logic or side effects, including authentication-related hooks.
    *   `src/lib/`: Contains utility functions, helpers, and configuration files that are not directly UI components, including authentication-related utilities.
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS, respectively.
*   `vite.config.ts`: Configuration for the Vite build tool.
*   `package.json`: Manages project dependencies, scripts, and metadata.
*   `components.json`: Configuration file specifically used by shadcn/ui for component management.

## Important Conventions and Patterns

*   **Component-Driven Development**: The application is built by composing a hierarchy of reusable React components, promoting modularity and maintainability.
*   **Utility-First Styling**: Extensive use of Tailwind CSS classes for styling elements directly within JSX, ensuring consistency and rapid UI development.
*   **shadcn/ui Integration**: The project heavily utilizes shadcn/ui for consistent, accessible, and themeable UI components, which are managed within `src/components/ui`.
*   **User Authentication**: Authentication state is managed application-wide through a custom React Context and related hooks, ensuring secure access control to specific routes and functionalities.
*   **TypeScript**: The entire codebase is written in TypeScript, enforcing strict type checking to improve code quality, readability, and reduce runtime errors.
*   **Configuration Centralization**: Dedicated configuration files for build tools (Vite), styling (Tailwind CSS), and UI components (`components.json`) centralize project settings.
*   **ESLint**: Implemented for code linting to ensure consistent code style and adherence to best practices.
```