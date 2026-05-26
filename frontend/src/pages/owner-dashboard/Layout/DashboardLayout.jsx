import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-black text-white">

            
            <Sidebar />

            {/* Right Side */}
            <div className="flex-1 flex flex-col">

                
                <DashboardNavbar />

                {/* Pages */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;