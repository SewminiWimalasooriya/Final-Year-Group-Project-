import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AllStations from "./pages/home/AllStations";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/view-stations" element={<AllStations />} />

      </Routes>

   
  );
}

export default App;