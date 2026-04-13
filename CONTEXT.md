This document provides a concise overview of the project's purpose, technical architecture, and key conventions.

## CONTEXT

This project is a modern, responsive web application, likely serving as a marketing website or a multi-page landing site for an educational platform or business. It showcases various sections such as an 'About' page, 'Courses,' 'Features,' 'Testimonials,' and a 'Call to Action,' suggesting a promotional or informational purpose.

### Tech Stack & Architecture

The application is built as a Single Page Application (SPA) with a robust and modern frontend stack:

-   **Frontend Framework:** React (with TypeScript)
-   **Build Tool:** Vite for fast development and optimized builds.
-   **Styling:** Tailwind CSS for a utility-first approach, configured via `tailwind.config.ts` and PostCSS.
-   **UI Component Library:** shadcn/ui, which provides a collection of accessible, customizable components built on Radix UI primitives. These components are integrated directly into the project's codebase (`src/components/ui/`).
-   **Routing:** React Router DOM for client-side navigation.
-   **State Management/Data Fetching:** Leverages `@tanstack/react-query` for server state management and asynchronous data handling, and `react-hook-form` with `zod` for robust form validation.
-   **Utilities:** `clsx` and `tailwind-merge` are used via `src/lib/utils.ts` (the common `cn` function) for dynamic and conditional styling with Tailwind CSS.

The architecture is component-based, typical for React applications, promoting reusability and maintainability.

### Key Directories and Their Purpose

-   **`public/`**: Stores static assets such as `favicon.ico`, `robots.txt`, and placeholder images.
-   **`src/`**: Contains all application source code.
    -   **`src/App.tsx`**: The root component of the application, often responsible for global layout or routing.
    -   **`src/main.tsx`**: The entry point for the React application.
    -   **`src/components/`**: Houses application-specific, reusable components (e.g., `Hero`, `Navigation`, `Footer`, `Courses`).
    -   **`src/components/ui/`**: Contains the customized shadcn/ui components, generated or copied into the project, ready for direct use and modification.
    -   **`src/pages/`**: Holds top-level page components that define the structure and content for specific routes (e.g., `Index.tsx`, `NotFound.tsx`).
    -   **`src/hooks/`**: Custom React hooks for encapsulating reusable logic (e.g., `use-mobile.tsx` for responsiveness, `use-toast.ts` for notifications).
    -   **`src/lib/utils.ts`**: A utility file primarily used for helper functions, notably the `cn` function for Tailwind class manipulation.
    -   **`src/index.css`, `src/App.css`**: Global styles, including Tailwind CSS directives.
-   **`tailwind.config.ts`**: Tailwind CSS configuration file.
-   **`vite.config.ts`**: Vite build tool configuration.
-   **`tsconfig*.json`**: TypeScript configuration files.
-   **`components.json`**: Configuration file for shadcn/ui, managing component imports and theming.

### Important Conventions and Patterns

-   **Component Structure:** A clear hierarchy exists with application-specific components (`src/components/`) composing pages (`src/pages/`), which in turn utilize low-level UI components (`src/components/ui/`).
-   **shadcn/ui Integration:** shadcn/ui components are directly part of the codebase, allowing for full customization and version control. They follow the `data-state` and `data-radix-collection` attributes for accessibility and state management provided by Radix UI.
-   **TypeScript Everywhere:** Strong typing is enforced throughout the codebase, enhancing code quality and developer experience.
-   **Utility-First Styling:** All styling is managed through Tailwind CSS classes, promoting consistency and rapid development.
-   **`cn` Utility Function:** The `cn` function from `src/lib/utils.ts` is a common pattern for merging and conditionally applying Tailwind CSS classes effectively.
-   **Lovable Project Origin:** The project's `README.md` indicates it's generated and managed by "Lovable," suggesting a platform that streamlines project setup, development, and deployment workflows.