import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 max-w-[1800px] mx-auto">
      <div className="w-full h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;