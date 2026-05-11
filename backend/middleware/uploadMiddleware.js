import multer from "multer";
import path from "path";


// storage config
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads/apartments");

    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() + path.extname(file.originalname);

        cb(null, uniqueName);

    }

});


// allow only images
const fileFilter = (req, file, cb) => {

    const allowedTypes = /jpg|jpeg|png|webp/;

    const extName = allowedTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    if (extName) {

        cb(null, true);

    } else {

        cb(new Error("Only image files allowed"));

    }
};


const upload = multer({
    storage,
    fileFilter
});

export default upload;