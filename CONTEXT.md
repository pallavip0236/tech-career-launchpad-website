```markdown
## Project Context

This project is a **modern, responsive web application**, likely a marketing site or landing page, designed to showcase a product, service, or educational offering with dynamically managed content. Its structure suggests a focus on presenting information through sections like a hero, features, courses, testimonials, and calls to action.

### Tech Stack and Architecture

*   **Frontend Framework**: React.js (Single-Page Application)
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS for utility-first styling, with PostCSS and Autoprefixer.
*   **UI Library**: shadcn/ui, built on top of Radix UI primitives, providing a set of customizable and accessible UI components.
*   **Routing**: React Router DOM for client-side navigation.
*   **State Management/Data Fetching**: `@tanstack/react-query` for server state management and data fetching.
*   **Form Handling**: `react-hook-form` with `zod` for schema validation.
*   **Headless CMS Integration**: For dynamic content management, with data fetched via APIs.
*   **Other notable libraries**: `lucide-react` for icons, `sonner` for toasts, `recharts` for charting, `embla-carousel-react` for carousels.

The architecture follows a component-driven approach, separating concerns into pages, reusable components, and UI primitives.

### Key Directories and Their Purpose

*   `src/`: Contains all application source code.
    *   `src/App.tsx`: Main application component, typically housing the router setup.
    *   `src/main.tsx`: Entry point of the React application.
    *   `src/pages/`: Top-level components representing distinct application routes (e.g., `Index` for the homepage, `NotFound`).
    *   `src/components/`: Reusable React components that compose page layouts and larger sections (e.g., `Hero`, `Navigation`, `Footer`).
    *   `src/components/ui/`: Components generated and managed by `shadcn/ui`, providing a consistent design system based on Radix UI and styled with Tailwind CSS.
    *   `src/hooks/`: Custom React hooks to encapsulate reusable logic (e.g., `use-toast`, `use-mobile`).
    *   `src/lib/`: Utility functions and helper modules (e.g., `utils.ts` for `clsx` and `tailwind-merge`).
    *   `src/api/`: Modules for interacting with external APIs, particularly for dynamic content from the CMS.
    *   `src/types/`: TypeScript definitions for data structures, including API responses and application models.
    *   `src/App.css`, `src/index.css`: Global application styles, primarily Tailwind directives and custom CSS.
*   `public/`: Static assets served directly by the web server (e.g., `favicon.ico`, `robots.txt`).
*   `components.json`: Configuration file for `shadcn/ui`, defining component paths and style configurations.
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS.
*   `vite.config.ts`: Configuration for Vite, the build tool.
*   `tsconfig*.json`: TypeScript configuration files.
*   `package.json`: Project metadata, scripts, and dependency management.

### Important Conventions and Patterns

*   **Component-Based Architecture**: Strict adherence to a component-driven development model, promoting reusability and maintainability.
*   **Shadcn/ui & Radix UI**: Utilization of `shadcn/ui` for a highly customizable and accessible UI component library, building on Radix UI's headless components. This centralizes UI definition in `src/components/ui/`.
*   **Utility-First CSS**: Styling is primarily managed through Tailwind CSS classes, promoting rapid and consistent UI development.
*   **TypeScript**: The entire codebase is written in TypeScript, ensuring type safety and improving code quality.
*   **Vite Development**: Leveraging Vite for a fast development experience, including hot module replacement.
*   **Dynamic Content Management**: Key application content is sourced dynamically from an external headless CMS, allowing for flexible updates without requiring code changes or redeployments.
*   **Lovable Platform Integration**: This project is integrated with the "Lovable" platform, which simplifies development workflows, code generation, and deployment (as indicated by the `README.md`).
```