
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Playlists from "./pages/Playlists";
import Contact from "./pages/Contact";
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
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/podcasts" element={<div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="text-white text-2xl">Podcasts page coming soon!</div></div>} />
          <Route path="/videos" element={<div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="text-white text-2xl">Videos page coming soon!</div></div>} />
          <Route path="/shorts" element={<div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="text-white text-2xl">Shorts page coming soon!</div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
