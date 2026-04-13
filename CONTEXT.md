```md
# CONTEXT.md

This document provides a concise overview of the project's purpose, technical foundations, structure, and key development patterns.

## 1. Project Overview

This project is a modern, client-side rendered web application, serving as a marketing site, landing page, or portfolio. It now actively integrates with external APIs to fetch and manage dynamic content, enhancing its modular structure with components like `Hero`, `Features`, `Courses`, `Testimonials`, and `CTA`. It emphasizes a visually polished user interface and a responsive design. The project appears to be managed or generated via the "Lovable" platform, as indicated in the `README.md`.

## 2. Tech Stack and Architecture

The application is built as a Single Page Application (SPA) with a robust frontend stack:

*   **Frontend Framework**: React with TypeScript for type safety.
*   **Build Tool**: Vite, providing a fast development server and optimized build process.
*   **Styling**: Tailwind CSS for utility-first styling, complemented by PostCSS and Autoprefixer.
*   **UI Component Library**: `shadcn/ui`, which leverages Radix UI primitives and Tailwind CSS for a highly customizable and accessible component set.
*   **Routing**: `react-router-dom` for client-side navigation.
*   **Form Management**: `react-hook-form` integrated with `zod` for schema validation.
*   **State/Data Fetching**: `@tanstack/react-query` is now a core library for efficient data fetching, caching, synchronization, and state management, especially with the introduction of dynamic content.
*   **Package Manager**: `npm` (with `package-lock.json`) is the primary package manager.

The architecture follows a component-driven design, promoting reusability and maintainability.

## 3. Key Directories and Their Purpose

*   `public/`: Contains static assets like `favicon.ico`, `robots.txt`, and placeholder images, served directly by the web server.
*   `src/`: The main application source code directory.
    *   `src/main.tsx`: The application's entry point, rendering the root React component.
    *   `src/App.tsx`: The primary application component, typically housing global layout and routing logic.
    *   `src/pages/`: Contains top-level page components that correspond to different routes (e.g., `Index.tsx` for the home page, `NotFound.tsx`).
    *   `src/components/`: Houses general-purpose, reusable React components, often representing sections or larger UI blocks (e.g., `Hero`, `Navigation`, `Footer`).
    *   `src/components/ui/`: Dedicated to `shadcn/ui` components. These are highly customizable and often generated/modified foundational UI elements (e.g., `button`, `dialog`, `input`).
    *   `src/hooks/`: Stores custom React hooks for encapsulating reusable stateful logic.
    *   `src/lib/`: Contains utility functions and helper modules that are not components or hooks (e.g., `utils.ts`).
    *   `src/index.css`: Global CSS imports and base styles.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS, including theme extensions and plugin settings.
*   `vite.config.ts`: Configuration file for the Vite build tool.
*   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript compiler configuration files for the project and specific environments.
*   `components.json`: Configuration file used by `shadcn/ui` for managing its components.

## 4. Important Conventions and Patterns

*   **Component-Driven Development**: The project heavily relies on a component-based architecture, promoting modularity and reusability, especially evident in the `src/components` and `src/components/ui` structure.
*   **Shadcn/ui Integration**: All core UI components are built using `shadcn/ui`, ensuring design consistency and accessibility. These components are typically customized and live directly within the project's `src/components/ui` directory.
*   **Type Safety with TypeScript**: The entire codebase is written in TypeScript, enforcing strong typing for improved maintainability, fewer bugs, and better developer experience.
*   **Utility-First Styling**: Tailwind CSS is the preferred method for styling, applying styles directly in JSX using utility classes.
*   **Data Fetching with React Query**: `@tanstack/react-query` is utilized for managing server state, ensuring efficient data fetching, caching, and background synchronization across components.
*   **Vite for Efficiency**: Vite is configured for rapid development, hot module reloading, and an optimized production build.
*   **Lovable Platform Workflow**: The `README.md` indicates integration with the "Lovable" platform, suggesting that development, deployment, and potentially code generation may be facilitated by this external service.
```