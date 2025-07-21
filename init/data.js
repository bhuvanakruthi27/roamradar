const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Rooms"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Iconic Cities"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Rooms"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic Cities"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Farms"
  },
  {
  title: "Historic Castle in the Scottish Highlands",
  description: "Live like royalty in this majestic castle surrounded by rugged landscapes.",
  price: 5000,
  location: "Inverness",
  country: "United Kingdom",
  category: "Castles",
  image: {
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "castleimage1"
  },
  geometry: {
    type: "Point",
    coordinates: [-4.2026, 56.4907]
  },
  owner: "687157f2b63c7c8221bf4ff5"
},
{
  title: "Countryside Farm Stay",
  description: "Escape to the peaceful countryside and experience authentic farm life.",
  price: 800,
  location: "Kansas",
  country: "United States",
  category: "Farms",
  image: {
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "farmimage1"
  },
  geometry: {
    type: "Point",
    coordinates: [-95.7129, 37.0902]
  },
  owner: "687157f2b63c7c8221bf4ff5"
},
{
  title: "Luxury Villa with Infinity Pool",
  description: "Relax in a stunning villa with a private infinity pool overlooking the ocean.",
  price: 7000,
  location: "Malibu",
  country: "United States",
  category: "Amazing Pools",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "poolimage1"
  },
  geometry: {
    type: "Point",
    coordinates: [-73.935242, 40.730610]
  },
  owner: "687157f2b63c7c8221bf4ff5"
},


{
  title: "Farm Cottage in New Zealand",
  description: "A cozy stay amidst green pastures and rolling hills in New Zealand.",
  price: 850,
  location: "Waikato",
  country: "New Zealand",
  category: "Farms",
  image: {
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "farmimage3"
  },
  geometry: {
    type: "Point",
    coordinates: [175.2793, -37.7870]
  },
  owner: "687157f2b63c7c8221bf4ff5"
},

{
  title: "Infinity Pool at Luxury Resort",
  description: "Bask in luxury with an infinity pool overlooking the Mediterranean Sea.",
  price: 8000,
  location: "Santorini",
  country: "Greece",
  category: "Amazing Pools",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "poolimage3"
  },
  geometry: {
    type: "Point",
    coordinates: [25.4615, 36.3932]
  },
  owner: "687157f2b63c7c8221bf4ff5"
},

];


module.exports = { data: sampleListings };
