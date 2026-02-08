import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Android from "./pages/Android";
import Java from "./pages/Java";
import Spring from "./pages/Spring";
import SpringBoot from "./pages/SpringBoot";
import Javascript from "./pages/Javascript";
import ReactPage from "./pages/React";
import Python from "./pages/Python";
import Sanskrit from "./pages/Sanskrit";
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/android" element={<Android />} />
        <Route path="/java" element={<Java />} />
        <Route path="/spring" element={<Spring />} />
        <Route path="/spring-boot" element={<SpringBoot />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/python" element={<Python />} />
        <Route path="/sanskrit" element={<Sanskrit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
