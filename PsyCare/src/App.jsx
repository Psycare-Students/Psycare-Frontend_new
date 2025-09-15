import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StreakAnalysis from "./pages/StreakAnalysis";
import AIChat from "./pages/AIChat";
import CounselorBooking from "./pages/CounselorBooking";
import Resources from "./pages/Resources";
import AuthForm from "./pages/AuthForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/streak" element={<StreakAnalysis />} />
        <Route path="/chat" element={<AIChat />} />
        <Route path="/counselor" element={<CounselorBooking />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
