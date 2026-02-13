import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransitionProvider } from "@/contexts/PageTransitionContext";
import { PageTransitionOverlay } from "@/components/ui/page-transition-overlay";
import Index from "./pages/Index";
import PropertyDetails from "./pages/PropertyDetails";
import AllProperties from "./pages/AllProperties";
import TerrenosPage from "./pages/TerrenosPage";
import CasasPage from "./pages/CasasPage";
import ApartamentosPage from "./pages/ApartamentosPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PageTransitionProvider>
        <Toaster />
        <Sonner />
        <PageTransitionOverlay />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/imoveis" element={<AllProperties />} />
            <Route path="/terrenos" element={<TerrenosPage />} />
            <Route path="/casas" element={<CasasPage />} />
            <Route path="/apartamentos" element={<ApartamentosPage />} />
            <Route path="/imovel/:id" element={<PropertyDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PageTransitionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
