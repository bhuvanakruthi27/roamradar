const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/reviews.js");
const Listing=require("../models/listing.js");
const{validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");

//Reviews

//Post review route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(async (req,res)=>{
    let{id}=req.params;
    let listing=await Listing.findById(id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

   
    newReview.save();
    listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${id}`);
}));

//delete review route
router.delete("/:reviewId",
    isReviewAuthor,
    wrapAsync(async(req,res)=>{
        let {id,reviewId}=req.params;

        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
        await Review.findByIdAndDelete(reviewId);

        req.flash("success","Review deleted!");
        res.redirect(`/listings/${id}`);
}));

module.exports=router;