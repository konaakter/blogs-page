const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  hortDescription: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  img: {
    type: String,
    default: Date.now,
  },
});

module.exports = blogSchema;