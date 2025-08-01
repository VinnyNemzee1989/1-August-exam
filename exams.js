// Route
const express= require("express");
const router= express.Router();
const multer= require("multer");
const uploadController= require("../contollers/uploadController");

const upload= multer();

// upload multiple fields
const moreFields= upload.fields([
    {name: "previewPix",maxCount: 1},
    {name: "detailedPix", maxCount: 1},
    {name: "video", maxCount: 1}
]);

route.post("/single", upload.single("vn"), singleFile);
route.post("/arrays",upload.arrar("vn, 4"), arrayFile);
route.post("/multiple", moreFields,multipleFile);

module.exports= route;


// controller
// upload single file fields
const singleFile= async (req, res)=>{
    console.log(req.file);
    console.log(req.body);
    return res.send ("successful");
};

// uploading array array files
const arrayFile= async(req, res)=>{
    console.log(req.files);
    console.log(req.body);
    return res.send("successful");
};

//multiple files
const multipleFile= async(req, res=>{
    console.log(req.files);
    console.log(req.body);
    return res.send("successful");
});


