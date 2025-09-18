import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index.jsx";
import ChatSection from "./components/ChatSection.jsx";
import AppointmentsSection from "./components/AppointmentsSection.jsx";
import Ai_chat from "./components/AIChatSection.jsx";
import BookingSection from "./components/BookingSection.jsx";
import WellnessResources from "./components/ResourcesSection.jsx";
import CommunitySection from "./components/CommunitySection.jsx";
import Tests from "./components/Tests.jsx" // Chat page component
import AuthSelection from "./components/AuthSection.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navigation.jsx";
import Profile from "./pages/Profile.jsx";
import StressManagement from "./pages/StressManagement.jsx";
import SleepAudioLibrary from "./pages/SleepLibrary.jsx"; 
import WellnessBreathingPage from "./pages/BreathPage.jsx";
import MindfulnessPage from "./pages/MindfulnessPage.jsx";

// Initialize React Query client

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Google login query param handler */}
      {(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const avatar = params.get('avatar');
        const funnyName = params.get('funnyName');
        const name = params.get('name');
        const email = params.get('email');
        const role = params.get('role');
        if (token && avatar && funnyName) {
          const user = { avatar, funnyName, name, email, role };
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          // Remove query params and reload to update navbar
          window.location.replace(window.location.pathname);
        }
      })()}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatSection />} />
          <Route path="/appointments" element={<AppointmentsSection />} />
          <Route path="/book" element={<BookingSection />} />
          <Route path="/resources" element={<WellnessResources />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/ai-chat" element={<Ai_chat />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/auth" element={<AuthSelection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stress-management" element={<StressManagement />} />
          <Route path="/sleep-library" element={<SleepAudioLibrary />} />
          <Route path="/breath" element={<WellnessBreathingPage />} />
          <Route path="/mindfulness" element={<MindfulnessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
