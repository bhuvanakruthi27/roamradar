const Listing=require("../models/listing.js");
const fetch = require('node-fetch');

module.exports.index=async (req,res)=>{
    let allListings;
    let searchItem=req.query.search;
    if(!searchItem){
         allListings= await Listing.find({});
    }else{
         allListings=await Listing.find({
            $or:[
                {title:{$regex:searchItem,$options:"i"}},
                {location:{$regex:searchItem,$options:"i"}},
                {country:{$regex:searchItem,$options:"i"}},
                {category:{$regex:searchItem,$options:"i"}},
            ]
        });
    }
  
    res.render("listings/index.ejs",{allListings,selectedCategory:null,searchItem});
}

module.exports.newRenderForm=(req,res)=>{   
    res.render("listings/new.ejs");
}
module.exports.createListing=async (req,res,next)=>{
        let url=req.file.path;
        let filename=req.file.filename;
        let {location,category}=req.body.listing;

        
        if (!category) {
            req.flash('error', 'Please select a category.');
            return res.redirect('/listings/new');
        }

        // Fetch coordinates from MapTiler
        const response = await fetch(`https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${process.env.MAP_TOKEN}`);
        const data = await response.json();

         if (!data.features || data.features.length === 0) {
            req.flash('error', 'Invalid location, please enter a valid address.');
            return res.redirect('/listings/new');
        }
        const geometry = data.features[0].geometry;

        const newListing= new Listing(req.body.listing);
        newListing.owner=req.user._id;
        newListing.image={url,filename};
        newListing.geometry=geometry;

        await newListing.save();
        console.log(newListing);
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
    
 }

 module.exports.category=async (req,res)=>{
    const {category}=req.params;
    const listings =await Listing.find({category});
    res.render('listings/index',{allListings: listings, selectedCategory: category,searchItem:null});
 }

 module.exports.showListing=async (req,res)=>{
   let {id}=req.params;
   const listing=await Listing.findById(id)
        .populate({
            path:"reviews",
            populate:{
                path:"author",
            }
        })
        .populate("owner");
   if(!listing){
        req.flash("error","Listing you requested does not exist!");
       return res.redirect("/listings");
   }
   res.render("listings/show.ejs",{listing,mapToken: process.env.MAP_TOKEN});
}

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
     if(!listing){
        req.flash("error","Listing you requested does not exist!");
       return res.redirect("/listings");
   }
    let originalImageUrl=listing.image.url;
    originalImageUrl = originalImageUrl.replace(
    "/upload/",
    "/upload/w_250/"
    );

    res.render("listings/edit.ejs",{listing,originalImageUrl});
}

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
     if(typeof(req.file)!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
       await listing.save();
     }
    
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing=async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id,{});
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
}