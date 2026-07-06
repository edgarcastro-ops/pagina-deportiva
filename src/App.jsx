import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MLB from "./pages/MLB";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mlb" element={<MLB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;