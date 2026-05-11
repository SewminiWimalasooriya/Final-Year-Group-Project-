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

//block an apartment
export const blockaprtment = async (req,res) => {
    try {
        const apartmentId = req.params.id;
        const apartment = await Apartment.findById(apartmentId);
        if(!apartment){
            return res.status(404).json({message:"Apartment not found"});
        }

        apartment.status = "blocked";
        await apartment.save();
        res.status(200).json({message:"Apartment blocked successfully"});   

    }catch(err){
        res.status(500).json({error:err.message});
    }
}