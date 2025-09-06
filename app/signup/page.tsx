"use client"

import { Toaster } from "sonner";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "@/helpComponents/GetStarted";
import SignIn from "@/helpComponents/SignIn";
import SignUp from "@/helpComponents/SignUp";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}> 
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;