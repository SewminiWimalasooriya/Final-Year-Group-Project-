import { useParams } from "react-router-dom";

const Overview = () => {
    const { id } = useParams();
    return (
        <div>

            <h1 className="text-3xl font-bold mb-5">
                Dashboard Overview
            </h1>

            <div className="grid grid-cols-3 gap-5">

                <div className="bg-gray-900 p-5 rounded-2xl">
                    Total Stations
                </div>

                <div className="bg-gray-900 p-5 rounded-2xl">
                    Active Users
                </div>

                <div className="bg-gray-900 p-5 rounded-2xl">
                    Revenue
                </div>

            </div>

        </div>
    );
};

export default Overview;