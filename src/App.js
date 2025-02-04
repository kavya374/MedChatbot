import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Features } from "./Components/Features/Features";
import Body from "./Components/Body/Body";
import { Sephina } from "./Components/Sephina/Sephina";
import Login  from "./Components/Login/Login";
import Hospitals from "./Components/Hospitals/Hospitals";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/features" element={<Features />} />
        <Route path="/sephina" element={<Sephina />} />
        <Route path="/hospitalsnearby" element={<Hospitals />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
