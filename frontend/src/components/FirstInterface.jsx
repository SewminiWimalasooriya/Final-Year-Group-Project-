import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import ringanimation from "../assets/lines1.json";
import spark from "../assets/Sparkles Animation.json";

const FirstInterface = () => {

    const navigate = useNavigate();

    // modal state
    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState(null);

    const fileInputRef = useRef(null);

    // form state
    const [formData, setFormData] = useState({
        apartmentName: "",
        ownerName: "",
        email: "",
        address: "",
        phoneNo: "",

    });

    // input handle
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // submit form
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const sendData = new FormData();

            sendData.append("name", formData.apartmentName);
            sendData.append("ownerName", formData.ownerName);
            sendData.append("email", formData.email);
            sendData.append("address", formData.address);
            sendData.append("phone", formData.phoneNo);

            // image
            sendData.append("image", image);

            const response = await fetch(
                "http://localhost:5000/api/apartment/create",
                {
                    method: "POST",
                    body: sendData,
                }
            );

            const data = await response.json();

            alert(data.message);
            if(response.ok){
                setFormData({
                apartmentName: "",
                ownerName: "",
                email: "",
                address: "",
                phoneNo: "",
            })
            setImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            }
            

        } catch (error) {

            alert("Error sending request:" + error.message);

        }
    };

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
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">

                <p className="text-2xl md:text-4xl mb-16 max-w-4xl text-blue-400 font-bold">
                    Welcome to EV Charging System..! <br />
                </p>

                <p className="text-base md:text-xl mb-10 max-w-2xl text-white">
                    Smart, fast, and reliable EV charging platform that helps you
                    find stations, manage bookings, and track charging in real time.
                    <br />
                    Drive the future with clean energy
                </p>

                <div className="flex gap-4">

                    <button
                        onClick={() => navigate("/view-stations")}
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                    >
                        View EV Stations
                    </button>

                    <button
                        onClick={() => setOpenModal(true)}
                        className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Join with us
                    </button>

                </div>

            </div>

            {/* Modal */}
            {openModal && (

                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

                    <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-3 right-3 text-gray-600 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Apartment Request
                        </h2>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >

                            <input
                                type="text"
                                name="apartmentName"
                                placeholder="Apartment Name"
                                value={formData.apartmentName}
                                onChange={handleChange}
                                className="border p-3 rounded-lg outline-none"
                                required
                            />

                            <input
                                type="text"
                                name="ownerName"
                                placeholder="Owner Name"
                                value={formData.ownerName}
                                onChange={handleChange}
                                className="border p-3 rounded-lg outline-none"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-3 rounded-lg outline-none"
                                required
                            />

                            <textarea
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="border p-3 rounded-lg outline-none"
                                rows="3"
                                required
                            />
                            <input
                                type="number"
                                name="phoneNo"
                                placeholder="Phone Number"
                                value={formData.phoneNo}
                                onChange={handleChange}
                                className="border p-3 rounded-lg outline-none"
                                required
                            />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={(e) => setImage(e.target.files[0])}
                                className="border p-3 rounded-lg outline-none"
                            />

                            <button
                                type="submit"
                                className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"

                            >
                                Send Request
                            </button>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
};

export default FirstInterface;