import ApartmentRequest from "../models/ApartmentRequest.js";
import Apartment from "../models/Apartment.js";

export const createApartmentRequest = async (req, res) => {
    try {
        const { name, email } = req.body;

        // 1. Check existing pending request
        const existingRequest = await ApartmentRequest.findOne({
            name,
            email,
            status: "PENDING",
        });

        if (existingRequest) {
            return res.status(400).json({
                message: "Request already pending for this apartment",
            });
        }

        // 2. Check already approved apartment
        const existingApartment = await Apartment.findOne({ name, email });

        if (existingApartment) {
            return res.status(400).json({
                message: "Apartment already exists",
            });
        }

        // 3. Create new request
        const request = await ApartmentRequest.create(req.body);

        res.status(201).json({
            message: "Request sent for approval",
            request,
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//Get all apartment request ( for admin panel show )
export const getPendingRequest = async (req, res) => {
    try {
        const requests = await ApartmentRequest.find({ status: "PENDING" });

        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//Approve request (for admnn panel approve button)
export const approveRequest = async (req, res) => {
    try {
        const requestId = req.params.id;

        const request = await ApartmentRequest.findById(requestId);

        if (request.status !== "PENDING") {
            return res.status(400).json({ message: "Already processed" });
        }

        if (!request) {
            return res.status(404).json({ message: "Not found" });
        }

        //create apartment 
        const apartment = await Apartment.create({
            name: request.name,
            address: request.address,
            ownerName: request.ownerName,
            email: request.email,
            phone: request.phone,
        });

        request.status = "APPROVED";
        await request.save();

        res.json({
            message: "Approved successfully",
            apartment,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// REJECT REQUEST
export const rejectRequest = async (req, res) => {
    const request = await ApartmentRequest.findById(req.params.id);

    if (!request) {
        return res.status(404).json({ message: "Not found" });
    }

    request.status = "REJECTED";
    await request.save();

    res.json({ message: "Rejected successfully" });
};