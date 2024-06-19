const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  images: [{ type: String, required: true }],
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true
  },
  area: {
    type: Number,
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
});

const Listing = mongoose.models.listings || mongoose.model("listings", ListingSchema);

export default Listing;
