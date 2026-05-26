import Apartment from "../models/Apartment.js";

export const getApprovedApartments = async( req , res) =>{
    try{
        const apartments = await Apartment.find({status:"approved"});
        if(apartments.length === 0){
            return res.status(404).json({message: "No registered apartments found"})
        }
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

//get blockList apartment
export const blockList = async (req,res) => {
    try{
        const blockapartments = await Apartment.find({status:"blocked"});
        if(blockapartments.length === 0){
            return res.status(404).json({message:"No Blocked Apartments Found"});
        }
        res.status(200).json(blockapartments);

    }catch (err) {
        res.status(500).json({
            error: err.message
        });
    };
}

//unblocked apartment
export const  unBlockedApartment = async ( req,res)=>{
    try {
        const apartmentId = req.params.id;
        const apartment = await Apartment.findById(apartmentId);
        if(!apartment){
            return res.status(404).json({message:"Apartment not found"});
        }

        apartment.status = "approved";
        await apartment.save();
        res.status(200).json({message:"Apartment unblocked successfully"});   

    }catch(err){
        res.status(500).json({error:err.message});
    }
}