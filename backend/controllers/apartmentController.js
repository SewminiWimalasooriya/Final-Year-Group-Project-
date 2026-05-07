import Apartment from "../models/Apartment.js";

export const getApprovedApartments = async( req , res) =>{
    try{
        const apartments = await Apartment.find();
        res.status(200).json(apartments);
    }catch (err) {
        res.status(500).json({
            error: err.message
        });
    };
}