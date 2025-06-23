import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseList from "./components/CaseList";
import CaseForm from "./components/CaseForm";
import Dashboard from "./pages/Dashboard";
import Servicios from "./pages/Servicios";
import CaseDetails from "./components/CaseDetails";
import ContactPage from "./pages/ContactPage";
import OperatingHours from "./pages/OperatingHours";
import "./styles/App.css";
import "./styles/OperatingHours.css";

const basename = process.env.PUBLIC_URL || "/";

function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setIsMinimized(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casos" element={<CaseList />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nuevo-caso" element={<CaseForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/caso/:id" element={<CaseDetails />} />
        <Route path="/operating-hours" element={<OperatingHours />} />
      </Routes>

      {/* Chatbot flotante visible en todas las rutas */}
      <button className="chatbot-float-btn" onClick={toggleChatbot}>
        {showChatbot ? "✕" : "🤖"}
      </button>

      <div className={`chatbot-container ${showChatbot ? "visible" : ""} ${isMinimized ? "minimized" : ""}`}>

        {!isMinimized && (
          <div className="chatbot-content">
            <iframe
              title="Chatbot"
              src="https://copilotstudio.microsoft.com/environments/Default-e7984cac-2543-4f88-8f97-9524335e6bc4/bots/cr29b_tatooineBot/webchat?__version__=2"
              frameBorder="0"
            />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
