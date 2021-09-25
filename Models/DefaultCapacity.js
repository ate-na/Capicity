const mongoose = require("mongoose");

const DefaultcapacitySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    capicity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const DEFAULT = mongoose.model("Default", DefaultcapacitySchema);
module.exports = DEFAULT;
