export const validateApartmentRequest = (req, res, next) => {
    const { name, email, address, ownerName } = req.body;

    if (!name || !email || !address || !ownerName) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    next();
}