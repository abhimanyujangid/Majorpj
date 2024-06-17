const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const listingSchema = new Schema({
    title: {type: String,
        required: true,
    },
    description: String,
    image: {type: String,
        set: (v) => v === "" ? "https://media.istockphoto.com/id/1418701619/photo/hotel-sign-on-building-facade-in-city-business-travel-and-tourism.jpg?s=1024x1024&w=is&k=20&c=oX24UV2LVBwwh_4Vd6hpf-sdBLSMLLq00XcaEwBCnkw=" : v,
    },
    price: Number,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
modules.export = Listing;