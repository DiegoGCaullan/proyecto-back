const Encuesta = require("../models/encuesta");

async function Resultados(req, res) {
  const [answers, score] = req.body;

  const formData = new Encuesta({ answers, score });
  formData
    .save()
    .then(() => res.json("resultados guardados correctamente"))
    .catch(() => res.status(400).json("Error: " + error));
}

module.exports = {
  Resultados,
};
