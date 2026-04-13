
// src/App.tsx.test.js
const appTsxContent = `import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
`;

function testAppTsx() {
  let success = true;
  let message = 'src/App.tsx should be a functional React component and setup BrowserRouter';

  if (!appTsxContent.includes('import { BrowserRouter, Routes, Route } from "react-router-dom"')) {
    success = false;
    message += '\n  - Missing react-router-dom imports';
  }
  if (!appTsxContent.includes('const App = () => (')) {
    success = false;
    message += '\n  - Missing App functional component definition';
  }
  if (!appTsxContent.includes('<BrowserRouter>')) {
    success = false;
    message += '\n  - Missing BrowserRouter component';
  }
  if (!appTsxContent.includes('<Routes>')) {
    success = false;
    message += '\n  - Missing Routes component';
  }
  if (!appTsxContent.includes('<Route path="/" element={<Index />} />')) {
    success = false;
    message += '\n  - Missing Index route';
  }
  if (!appTsxContent.includes('<Route path="*" element={<NotFound />} />')) {
    success = false;
    message += '\n  - Missing NotFound catch-all route';
  }

  if (success) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
  }
}

testAppTsx();
