import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AllStations from "./pages/home/AllStations";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/view-stations" element={<AllStations />} />
        <Route path="/admin/*" element={<AdminRoutes />}/>

      </Routes>

   
  );
}

export default App;