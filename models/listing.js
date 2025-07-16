const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./reviews");


const ListingSchema=new Schema({
    title:{
       type: String,
       required:true,
    },
    description:String,
    image:{
       url: String,
       filename:String
   },
    price:{
        type:Number,
        default:0
    },

    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

ListingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing ){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
});

const Listing=mongoose.model("Listing",ListingSchema);
module.exports=Listing;