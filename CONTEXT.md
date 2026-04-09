```markdown
## CONTEXT.md

This document provides a concise overview of the project, its technologies, structure, and key development patterns.

### What This Project Does

This project is a modern frontend application, primarily structured as a marketing or landing page for an educational or service-based platform. It features sections like "Hero," "Features," "Courses," "Testimonials," and "Call to Action," indicating its purpose is to showcase offerings and engage users.

### Tech Stack and Architecture

The project employs a robust and widely adopted modern web development stack:

*   **Frontend Framework**: React with TypeScript for building interactive user interfaces.
*   **Build Tool**: Vite, providing a fast development server and optimized build processes.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid UI development and customization.
*   **UI Library**: shadcn/ui, which provides a collection of accessible, composable, and customizable UI components built on Radix UI primitives. These components are integrated directly into the project, allowing for full control over their code and styling.
*   **Routing**: React Router DOM for client-side navigation.
*   **State Management/Data Fetching**: `@tanstack/react-query` is included for efficient server state management and data fetching.
*   **Form Handling**: `react-hook-form` coupled with `zod` for schema validation.
*   **Dependency Management**: npm (indicated by `package-lock.json` and scripts) and potentially Bun (indicated by `bun.lockb`).

### Key Directories and Their Purpose

*   **`/public`**: Contains static assets like favicons, placeholder images, and `robots.txt` that are served directly by the web server.
*   **`/src`**: The core application source code.
    *   **`src/App.tsx`**: The main application component, typically housing global layout and routing.
    *   **`src/main.tsx`**: The entry point for the React application, responsible for rendering the `App` component.
    *   **`src/pages/`**: Contains top-level page components, representing distinct routes (e.g., `Index.tsx` for the homepage, `NotFound.tsx` for a 404 page).
    *   **`src/components/`**: Houses reusable, higher-level components that form sections or features of the application (e.g., `Hero`, `Courses`, `Navigation`).
    *   **`src/components/ui/`**: Stores the localized shadcn/ui components, which are foundational, styled UI elements (e.g., `Button`, `Card`, `Dialog`).
    *   **`src/hooks/`**: Custom React hooks for encapsulating reusable stateful logic or side effects.
    *   **`src/lib/`**: General utility functions and helper modules that are not specific to UI components.
    *   **`src/index.css`, `src/App.css`**: Global and app-specific styles, often including Tailwind CSS directives.
*   **Root Configuration Files**:
    *   **`vite.config.ts`**: Configuration for Vite, the build tool.
    *   **`tailwind.config.ts`**: Configuration for Tailwind CSS.
    *   **`tsconfig*.json`**: TypeScript compiler configuration files.
    *   **`eslint.config.js`**: ESLint configuration for code linting and quality.
    *   **`components.json`**: Configuration file for shadcn/ui, used by its CLI.

### Important Conventions or Patterns

*   **Component Granularity**: A clear separation exists between page-level components (`pages/`), application-specific composite components (`components/`), and atomic UI components (`components/ui/`).
*   **shadcn/ui Integration**: Unlike traditional component libraries, shadcn/ui components are directly added to `src/components/ui/`. This allows developers full control over their styling and logic, making them highly customizable via Tailwind CSS.
*   **Utility-First Styling**: Tailwind CSS is extensively used, promoting a utility-first approach where styles are applied directly using utility classes.
*   **Type Safety**: The entire codebase is written in TypeScript, ensuring strong type checking and improved code maintainability.
*   **Vite Development Workflow**: The project leverages Vite for a fast and efficient development experience, including hot module replacement.
*   **Lovable Platform Integration**: The `README.md` indicates this project is managed via the "Lovable" platform, suggesting potential automated deployments or specific integration patterns with that ecosystem.
```