import multer from "multer";
import * as path from "path";

const upload = multer({
  storage: multer.diskStorage({}),
  filename: (req, file, cb) => {
    //const urlEncodedName = encodeURIComponent(file.originalname);
    const splitup = file.originalname.split(".");
    const newFilename = Date.now() + "." + splitup[splitup.length - 1];
    cb(null, newFilename);
  },
});

//   const upload = multer({ storage: storage });

export default upload;
