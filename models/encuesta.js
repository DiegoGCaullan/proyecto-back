const mongoose = require("mongoose");

const EncuestaSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  state: Boolean,
  category: String,
  questions: String,
  anwers: String,
  score: Number,
  image: String,
});

module.exports = mongoose.model("Encuesta", EncuestaSchema);
