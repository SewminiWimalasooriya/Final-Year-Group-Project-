import Navbar from "../../components/Navbar";
import { Player } from "@lottiefiles/react-lottie-player";

import spark from '../../assets/Sparkles Animation.json'

const AllStations = () => {
    const stations = [
        {
            id: 1,
            name: "Colombo Fast Charge",
            city: "Colombo",
            image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75"
        },
        {
            id: 2,
            name: "Kandy Green Station",
            city: "Kandy",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
        },
        {
            id: 3,
            name: "Galle EV Hub",
            city: "Galle",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
        },
        {
            id: 1,
            name: "Colombo Fast Charge",
            city: "Colombo",
            image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75"
        },
        {
            id: 2,
            name: "Kandy Green Station",
            city: "Kandy",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
        },
        {
            id: 3,
            name: "Galle EV Hub",
            city: "Galle",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
        },
        {
            id: 1,
            name: "Colombo Fast Charge",
            city: "Colombo",
            image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75"
        },
        {
            id: 2,
            name: "Kandy Green Station",
            city: "Kandy",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
        },
        {
            id: 3,
            name: "Galle EV Hub",
            city: "Galle",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
        }
    ];

    return (

        <div className="min-h-screen bg-black text-white relative">
            <div className="relative z-20">
                <Navbar />
            </div>

            <Player
                autoplay
                loop
                src={spark}
                className="absolute inset-0 w-full h-full opacity-80"
            />

            <div className="relative z-10  px-20">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-400 pb-8">
                    Available EV Stations
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {stations.map((station) => (
                        <div key={station.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

                            <img
                                src={station.image}
                                alt={station.name}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h2 className="text-xl font-bold">{station.name}</h2>
                                <p className="text-gray-400">{station.city}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllStations;