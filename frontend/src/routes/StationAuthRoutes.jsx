import { Routes, Route } from "react-router-dom";
import StationAuth from "../pages/auth/StationAuth";



const StationAuthRoutes = () => {
    return (
        <Routes>
            //user or owner login 
            <Route path="/station/:id" element = {<StationAuth />}/>
            

        </Routes>

    )
}

export default StationAuthRoutes;