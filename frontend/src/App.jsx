import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AllStations from "./pages/home/AllStations";
import AdminRoutes from "./routes/AdminRoutes";
import StationAuthRoutes from "./routes/StationAuthRoutes";
import StationMap from "./pages/home/StationMap";
import DashboardRoutes from "./routes/DashboardRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/view-stations" element={<AllStations />} />
        <Route path="/stations-map" element={<StationMap />}/>
        <Route path="/admin/*" element={<AdminRoutes />}/>
        <Route path="/auth/*" element={<StationAuthRoutes />}/>
        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard/*" element={<DashboardRoutes />}/>
        </Route>

      </Routes>

   
  );
}

export default App;