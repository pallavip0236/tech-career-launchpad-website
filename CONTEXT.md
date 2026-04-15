This project is a modern, responsive single-page application (SPA) designed as a versatile platform for products, services, or educational content. It now includes user authentication and dynamic content capabilities, featuring various sections like Hero, About, Courses, Features, Testimonials, and a Call-to-Action, all built with a strong emphasis on a consistent and accessible user interface.

### Tech Stack and Architecture

*   **Frontend Framework**: React (with TypeScript)
*   **Build Tool**: Vite (for fast development and optimized builds)
*   **Styling**: Tailwind CSS (utility-first approach, configured via `tailwind.config.ts`)
*   **UI Library**: shadcn/ui (a collection of re-usable components built on Radix UI primitives, providing a consistent design system and accessible patterns)
*   **Routing**: React Router DOM (for navigation between pages)
*   **Form Management**: React Hook Form with Zod for schema validation
*   **State Management / Data Fetching**: `@tanstack/react-query` (for server-state management, data fetching, and mutations, including authentication flows)
*   **Authentication Token Storage**: `js-cookie` (for secure client-side storage of authentication tokens)
*   **Deployment/Platform**: Lovable platform (as indicated by the `README.md`)

The architecture follows a standard component-based approach for React applications, separating concerns into logical units and leveraging modern tooling. It now includes a dedicated API interaction layer and supports user authentication workflows.

### Key Directories and Their Purpose

*   `src/`: Contains the main application source code.
    *   `src/App.tsx`: The root component, typically handling layout or routing.
    *   `src/main.tsx`: Entry point of the React application.
    *   `src/components/`: Houses larger, page-section-level components (e.g., `Hero`, `Navigation`, `Footer`, `Courses`) that compose the main application UI.
    *   `src/components/ui/`: Contains the shadcn/ui components. These are highly reusable, primitive UI elements (e.g., `button`, `card`, `dialog`) that form the building blocks of the application's design system.
    *   `src/pages/`: Defines top-level components corresponding to distinct routes or views of the application (e.g., `Index.tsx` for the home page, `NotFound.tsx`).
    *   `src/features/`: Houses self-contained, domain-specific features (e.g., `auth` for authentication-related components, hooks, and services).
    *   `src/hooks/`: Custom React hooks for encapsulating and reusing stateful logic (e.g., `use-mobile` for responsive behavior, `use-toast` for notifications).
    *   `src/lib/`: Utility functions and helper modules (e.g., `utils.ts` for common helpers like `cn` for class merging).
    *   `src/api/`: Contains functions and configurations for interacting with the backend API.
*   `public/`: Static assets served directly by the web server (e.g., `favicon.ico`, `robots.txt`).
*   `tailwind.config.ts`, `postcss.config.js`: Configuration files for Tailwind CSS and PostCSS.
*   `vite.config.ts`: Configuration for the Vite build tool.
*   `tsconfig.*.json`: TypeScript compiler configuration files.
*   `components.json`: Configuration file for `shadcn/ui` to manage its components.

### Important Conventions or Patterns

*   **Component-Oriented Development**: Heavy reliance on reusable React components, organized by their role (compositional in `src/components`, primitive in `src/components/ui`, feature-specific in `src/features`).
*   **shadcn/ui Workflow**: UI components are typically generated or copied into `src/components/ui` using the shadcn/ui CLI, rather than imported as a library, allowing for full customization.
*   **Utility-First CSS**: Tailwind CSS classes are used directly in JSX for styling, promoting rapid UI development and maintainability.
*   **TypeScript for Type Safety**: The entire codebase is written in TypeScript, ensuring type checking and improving code quality and developer experience.
*   **Vite Tooling**: Utilizes Vite's fast HMR (Hot Module Replacement) and optimized build process for development and production.
*   **Lovable Platform Integration**: The project is designed to be managed and deployed via the Lovable platform, streamlining workflows from development to deployment.
*   **API Interaction Layer**: All backend communication is centralized within `src/api/` and managed through `@tanstack/react-query` for efficient data fetching and mutation.
*   **Authentication Workflow**: User authentication state and token management are handled via dedicated hooks/services, leveraging `js-cookie` for secure client-side token storage.