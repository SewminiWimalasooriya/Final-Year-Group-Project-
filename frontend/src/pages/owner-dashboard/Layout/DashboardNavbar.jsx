import { useSelector } from "react-redux";

const DashboardNavbar = () => {

    const { user,role,apartment } = useSelector(
        (state) => state.stationAuth
    );
    

    return (
        <div className="h-12 border-b border-gray-800 bg-gray-900 flex items-center justify-between px-6">

            <h2 className="text-lg font-semibold">
                Welcome To VoltSpot {role}'s Dashboard
            </h2>

            <div className="flex items-center gap-3">

                <img
                    src="https://i.pravatar.cc/40"
                    alt=""
                    className="w-8 h-8 rounded-full"
                />

                <div>
                    <p className="text-sm font-semibold">
                        {user?.username}
                    </p>

                    <p className="text-sm text-gray-400">
                        {apartment?.name}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default DashboardNavbar;