const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const userId = "687157f2b63c7c8221bf4ff5"; // Replace with your user ObjectId
  const listingsWithExtras = initData.data.map((obj) => ({
    ...obj,
    owner: userId,
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716], // Dummy coordinates (Bangalore)
    },
  }));

  await Listing.insertMany(listingsWithExtras);
  console.log("Sample data was initialized successfully!");
};

initDB();
