const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  short_name: { type: String },
  name: { type: String },
  temperament: { type: String },
  origin: { type: String },
  description: { type: String },
  life_span: { type: String },
  adaptability: { type: Number },
  affection_level: { type: Number },
  child_friendly: { type: Number },
  cat_friendly: { type: Number },
  grooming: { type: Number },
  health_issues: { type: Number },
  intelligence: { type: Number },
  social_needs: { type: Number },
  stranger_friendly: { type: Number },
  bidability: { type: Number },
  url: {
    cfa_url: { type: String, default: "" },
    vetstreet_url: { type: String, default: "" },
    vcahospitals_url: { type: String, default: "" },
    wikipedia_url: { type: String, default: "" },
  },
  images: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Image",
    },
  ],
});

module.exports = mongoose.model("cats", CatSchema);
