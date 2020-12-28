const express = require('express');
const router = express.Router();
const model = require('./../models/especialistas');

const all = async (req, res) => {
    try {
      const especialistas = await model.get(); 
      res.render("especialistas", { especialistas: especialistas });
    } catch (e) {
      res.render("error");
    }
  };
  
  //para llamar de a uno .render crear vista
  const single = async (req, res) => {
    const { id } = req.params;
    const [especialista] = await model.single(id);

    res.render("especialista", { especialista });
  };
  
  router.get("/:id", single);
  router.get("/", all);

module.exports = router;