```markdown
# Project Context

## Overview
This project is a client-side rendered Single Page Application (SPA), likely serving as a marketing website, landing page, or informational platform. Its component structure (`Hero`, `Features`, `Courses`, `Testimonials`, `CTA`) suggests a focus on presenting various content sections to end-users.

## Tech Stack & Architecture
This is a modern web application built with:
*   **Frontend Framework**: React
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS with PostCSS
*   **UI Component Library**: shadcn/ui (built on top of Radix UI primitives for accessibility)
*   **Routing**: React Router DOM
*   **Package Manager**: npm (with `bun.lockb` present, implying potential Bun usage or previous experimentation, but `npm` is primary per `README`).
*   **Data Management**: `@tanstack/react-query` is included for potential server-state management or data fetching, `react-hook-form` for form handling, and local component state for UI logic.
*   **Architecture**: A standard SPA architecture, where React handles UI rendering and `react-router-dom` manages client-side navigation.

## Key Directories and Their Purpose
*   `public/`: Stores static assets like images and `robots.txt`, served directly by the web server.
*   `src/`: Contains all application source code.
    *   `src/main.tsx`: The entry point for the React application, rendering the root `App` component.
    *   `src/App.tsx`: The main application component, responsible for global layout and routing setup.
    *   `src/components/`: Reusable React components.
        *   `src/components/ui/`: Contains customized shadcn/ui components. These are generated from Radix UI primitives and styled with Tailwind CSS, integrated directly into the project for full customizability.
    *   `src/pages/`: Top-level page components, typically mapped to specific routes (e.g., `Index` for the home page, `NotFound` for a 404 error).
    *   `src/hooks/`: Custom React hooks, encapsulating reusable logic.
    *   `src/lib/`: Utility functions and helper modules (e.g., `utils.ts` for common helpers).
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS.
*   `vite.config.ts`: Configuration for the Vite build tool.
*   `tsconfig*.json`: TypeScript compiler configurations for different environments.
*   `eslint.config.js`: ESLint configuration for code linting.
*   `components.json`: Configuration file used by the shadcn/ui CLI.

## Important Conventions & Patterns
*   **Component-Driven Development**: The project follows a clear component hierarchy, separating generic UI elements (`src/components/ui`) from application-specific sections (`src/components`) and full page compositions (`src/pages`).
*   **Shadcn/ui Integration**: Rather than being installed as a dependency, shadcn/ui components are directly copied and managed within `src/components/ui/`. This allows for deep customization and control over the component code.
*   **Utility-First CSS**: Styling is primarily implemented using Tailwind CSS utility classes, often augmented with `clsx` for conditional classes and `tailwind-merge` for intelligent class string merging.
*   **TypeScript Throughout**: The entire codebase is strongly typed with TypeScript, enhancing code quality, maintainability, and developer experience.
*   **Modern Development Tooling**: Leverages Vite for a fast development server and optimized production builds, and ESLint for enforcing code style and best practices.
*   **Radix UI Primitives**: Underpinning the shadcn/ui components, Radix UI provides accessible, unstyled, and highly customizable building blocks.
```