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
      
      
         type: String,
         default:"https://images.unsplash.com/photo-1669288985408-1464229a070a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
         set:(v)=> v.trim()==="" ? undefined:v,
      
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