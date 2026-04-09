```markdown
This `CONTEXT.md` describes the project's purpose, technical details, structure, and development patterns.

## CONTEXT

### What this project does
This project is a modern, responsive frontend application, likely a marketing website or landing page. It's designed to present information (e.g., About, Features, Courses, Testimonials, Calls to Action) effectively through a user-friendly interface.

### Tech Stack and Architecture
*   **Frontend Framework**: React (with TypeScript) for building dynamic user interfaces.
*   **Build Tool**: Vite for a fast development experience and optimized production builds.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid UI development.
*   **UI Component Library**: `shadcn/ui` (built on Radix UI primitives) provides a collection of accessible and customizable UI components.
*   **Routing**: `react-router-dom` handles client-side navigation for a Single Page Application (SPA) experience.
*   **Form Management**: `react-hook-form` is used for robust form handling, integrated with `zod` for schema validation.
*   **Data Fetching**: `@tanstack/react-query` is included for efficient server state management.
*   **Client State Management**: React Context API is employed for global client-side application state, complementing server state managed by `@tanstack/react-query`.
*   **Package Manager**: Primarily `npm` (indicated by `package-lock.json`).

### Key Directories and Their Purpose
*   `src/`: Contains the core application source code.
    *   `src/main.tsx`: The application's entry point, rendering the root React component.
    *   `src/App.tsx`: The main application component, often orchestrating global layout or routing.
    *   `src/components/`: Houses higher-level, reusable application-specific components (e.g., `Hero`, `Navigation`, `Courses`).
    *   `src/components/ui/`: Contains the primitive, customizable UI components primarily derived from `shadcn/ui` (e.g., `button`, `dialog`, `input`).
    *   `src/pages/`: Top-level page components, typically corresponding to distinct routes in the application (e.g., `Index.tsx`, `NotFound.tsx`).
    *   `src/hooks/`: Stores custom React hooks for encapsulating reusable stateful logic.
    *   `src/lib/`: Provides utility functions and helper modules used across the application.
    *   `src/store/`: Manages global client-side state, contexts, and related logic.
*   `public/`: Stores static assets (images, favicon, robots.txt) that are served directly by the web server.

### Important Conventions or Patterns
*   **Component-Based Architecture**: Adheres to standard React practices, organizing the UI into modular and reusable components.
*   **Type Safety**: Comprehensive use of TypeScript throughout the codebase to ensure type safety and improve code maintainability.
*   **Utility-First Styling**: All styling is managed using Tailwind CSS classes. The `cn` utility in `src/lib/utils.ts` leverages `clsx` and `tailwind-merge` for conditional and intelligent class merging.
*   **shadcn/ui Integration**: Components in `src/components/ui/` are carefully integrated `shadcn/ui` components, which follow accessibility best practices via Radix UI primitives.
*   **Client-Side Routing**: The application uses `react-router-dom` for declarative routing and navigation.
*   **Form Validation**: Forms are managed using `react-hook-form` with `zod` schemas for robust client-side validation.
*   **Global Client State Management**: Application-wide client state (e.g., user preferences, theme settings) is managed using the React Context API, with related implementations typically located in `src/store`.
```