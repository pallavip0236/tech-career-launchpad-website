This document provides essential context for understanding the project's purpose, technical foundation, structure, and conventions.

### What this project does
This project is a modern, responsive front-end web application, serving as a dynamic marketing site, landing page, or informational portal. It showcases a product, service, or educational offering, providing a comprehensive user experience with dynamically fetched content from backend APIs, leveraging components like `Hero`, `Features`, `Courses`, `Testimonials`, `CTA`, and `About`.

### Tech Stack and Architecture
*   **Frontend Framework**: React (with TypeScript) for building dynamic user interfaces.
*   **Build Tool**: Vite, providing a fast development server and optimized builds.
*   **Language**: TypeScript for static type checking and improved code quality.
*   **Styling**: Tailwind CSS for a utility-first CSS approach, enabling rapid UI development.
*   **UI Library**: shadcn/ui, built on Radix UI primitives, offers a collection of accessible and customizable UI components, heavily utilized across the application.
*   **Routing**: React Router DOM for client-side navigation.
*   **State Management/Data Fetching**: `@tanstack/react-query` is used for efficient data fetching, caching, and state synchronization with backend APIs, often leveraging a dedicated HTTP client like `Axios`.
*   **Form Management**: `react-hook-form` with `zod` for robust form handling and validation.
*   **Package Manager**: Primarily `npm`, with `bun.lockb` also present, suggesting potential use of Bun as an alternative.
*   **Architecture**: Single Page Application (SPA) with a component-based structure, separating concerns into logical units (pages, components, hooks, utilities).

### Key Directories and Their Purpose
*   `public/`: Contains static assets like favicons, placeholder images, and `robots.txt`.
*   `src/`: The core application source code.
    *   `src/App.tsx`: The root component, typically handling application layout and routing.
    *   `src/main.tsx`: The entry point for the React application, responsible for mounting the `App` component.
    *   `src/components/`: Houses reusable React components.
        *   `src/components/ui/`: Specifically dedicated to shadcn/ui components, either directly imported or customized.
    *   `src/pages/`: Contains top-level components that represent distinct views or routes of the application (e.g., `Index` for the homepage, `NotFound`).
    *   `src/hooks/`: Custom React hooks for encapsulating reusable logic and stateful behavior.
    *   `src/lib/`: Utility functions and helper modules that can be shared across the application (e.g., `utils.ts`).
    *   `src/services/`: Houses modules responsible for interacting with backend APIs, often containing data fetching and mutation logic.
    *   `src/App.css`, `src/index.css`: Global CSS and Tailwind CSS imports.
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS, respectively.
*   `vite.config.ts`: Configuration for Vite, defining how the project is built and served.
*   `components.json`: shadcn/ui configuration file, used for managing and customizing UI components.
*   `tsconfig*.json`: TypeScript configuration files.

### Important Conventions or Patterns
*   **Component-Based Development**: Emphasizes modularity and reusability through a clear hierarchy of components.
*   **UI Component Library Usage**: Strong reliance on shadcn/ui for consistent and accessible UI elements, often extended or composed.
*   **Atomic Design Principles**: Components are structured, with `src/components/ui` acting as "atoms," `src/components` as "molecules/organisms," and `src/pages` as "templates/pages."
*   **Utility-First CSS**: Styling is primarily managed through Tailwind CSS classes, often utilizing the `clsx` and `tailwind-merge` utilities for conditional and consolidated class names.
*   **Custom Hooks for Logic**: Logic that can be reused or abstracted is encapsulated in custom hooks within the `src/hooks` directory.
*   **API Service Layer**: Logic for interacting with backend APIs is centralized within `src/services`, using `@tanstack/react-query` hooks to manage data lifecycle, ensuring a consistent and maintainable approach to data fetching.
*   **TypeScript Best Practices**: Adherence to strong typing throughout the codebase for maintainability and error prevention.
*   **Vite Development Workflow**: Utilizes Vite for a rapid development experience with hot module replacement (HMR) and optimized production builds.