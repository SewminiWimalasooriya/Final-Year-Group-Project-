import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../pages/owner-dashboard/Layout/DashboardLayout"
// import UserDashboard from "../pages/owner-dashboard/UserDashboard";

import AddOwner from "../pages/owner-dashboard/owner-pages/Add-owner";
import SlotsManagement from "../pages/owner-dashboard/owner-pages/SlotsManagement";
import Booking from "../pages/owner-dashboard/owner-pages/Booking"; 
import Overview from "../pages/owner-dashboard/owner-pages/Overview";

const DashboardRoutes = () => {
    return (
        <Routes>
            //user or owner  to dashboard login 
            
            <Route path="/owner/:id" element = {<DashboardLayout />}>
                <Route index element={<Overview />}/>
                <Route path="add-owner" element={<AddOwner />}/>
                <Route path="slots-management" element={<SlotsManagement />}/>
                <Route path="booking" element={<Booking />}/>
            
            </Route>
            {/* <Route path="/user/:id" element = {<UserDashboard />}/> */}

        </Routes>

    )
}

export default DashboardRoutes;