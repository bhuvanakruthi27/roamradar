const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController=require("../controllers/users.js");

router.route("/signup")
    //signup Form
    .get(userController.renderSignupForm)
    //signup
    .post(wrapAsync(userController.signup));

router.route("/login")
    //login form
    .get(userController.renderLoginForm)
    //login
    .post(
        saveRedirectUrl,
        passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true,
        }),
        userController.login
    );

//logout
router.get("/logout",userController.logout);

module.exports=router;