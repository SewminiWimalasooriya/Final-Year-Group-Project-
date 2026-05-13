import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import ringanimation from "../assets/lines1.json";
import spark from '../assets/Sparkles Animation.json';

const FirstInterface = () => {
    const navigate = useNavigate();
    return (
        <div className="relative w-screen h-[calc(100vh-64px)] bg-black overflow-hidden">
            {/* Background animation */}
            <Player
                autoplay
                loop
                src={ringanimation}
                className="absolute inset-0 w-full h-full opacity-80"
            />
           <Player
                autoplay
                loop
                src={spark}
                className="absolute inset-0 w-full h-full opacity-80"
            />
            

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center  z-10 px-6 text-center">
                <p className="text-2xl md:text-4xl mb-16 max-w-4xl text-blue-400 font-bold">
                    Welcome to EV Charging System..!<br/> 
                </p>
                <p className="text-base md:text-xl mb-10 max-w-2xl text-white">Smart, fast, and reliable EV charging platform that helps you find stations, manage bookings, and track charging in real time.<br />

                    Drive the future with clean energy </p>

                <div className="flex gap-4">
                    <button onClick={() => navigate("/view-stations")}
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                    >
                        View EV Stations
                    </button>

                    <button
                        className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Join with us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FirstInterface;