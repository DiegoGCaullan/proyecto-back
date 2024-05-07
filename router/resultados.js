const express = require("express");
const ResultadosController = require("../controllers/resultados");
const api = express.Router();

api.post("/resultados", ResultadosController.Resultados);

module.exports = api;
