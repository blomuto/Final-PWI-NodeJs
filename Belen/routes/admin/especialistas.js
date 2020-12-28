const express = require("express");
const router = express.Router();
const model = require("./../../models/especialistas");
const { get : getEspecialidades } = require("./../../models/especialidades");

const all = async (req, res) => {
  try {
    const especialistas = await model.get();
    const especialidades = await getEspecialidades();
    res.render("adminespecialistas", { especialistas: especialistas, especialidades: especialidades});
  } catch (e) {
    res.render('error');
  }
};
const create = async (req, res) =>
  model
    .create(req.body)
    .then((response) => res.redirect("/admin/especialistas/"))
    .catch((e) => res.render("error"));


router.get("/", all);
router.post("/create", create);
module.exports = router;