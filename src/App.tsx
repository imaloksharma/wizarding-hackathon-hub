import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Brochure from "./pages/Brochure";
import Schedule from "./pages/Schedule";
import Rules from "./pages/Rules";
import NotFound from "./pages/NotFound";
import OpenInnovation from "./pages/tracks/OpenInnovation";
import TrackDetails from "./pages/tracks/TrackDetails";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/tracks/open-innovation" element={<OpenInnovation />} />
              <Route path="/tracks/:slug" element={<TrackDetails />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
