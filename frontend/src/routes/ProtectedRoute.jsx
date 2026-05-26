import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const token = useSelector((state) => state.stationAuth.token);

    return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;