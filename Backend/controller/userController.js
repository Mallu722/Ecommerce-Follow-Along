const express = require("express");
const path = require("path");
const User = require("..model/user");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/errorHandler");


//create user

router.post("/create-user", upload.single("image"), async (req, res) => {
    const {name, email, password, role} = req.body;
    const userEmail = await User.findOne({email});
    if (userEmail) {
        return nextTick(new ErrorHandler("user already exist", 400));
        }
        
const filename = req.file.filename;
const fileUrl = path.join(filename);
const user = {
    name:name,
    email:email,
    password:password,
    avatar:fileUrl,
};
console.log(user);
});

module.exports=router;
