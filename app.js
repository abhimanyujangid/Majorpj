const express = require('express');
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")
const app = express();
const port = 3000;

const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connect to db");
})
.catch(err => {
    consol.log(err);
});
// create a function for conneting database
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.listen(3000, ()=>{
    console.log("server is listing");
});

// Example route
app.get("/testListing", async(req, res) => {
    let sampleListing = new Listing ({
        title: "My new villa",
        description: "By the beach",
        price: 1200,
        location: "Goa",
        country: "india",
    })
   await sampleListing.save();
   consol.log("Save");
   res.send("Successful testing")
  });
