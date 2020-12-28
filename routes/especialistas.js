const express = require('express');
const router = express.Router();
const model = require('./../models/especialistas');

const all = async (req, res) => {
    try {
      const especialistas = await model.get(); // [{}]
      //res.json(especialistas);
      res.render("especialistas", { especialistas: especialistas });
    } catch (e) {
      res.render("error");
    }
  };
  
  //para llamar de a uno .render crear vista
  const single = async (req, res) => {
    const { id } = req.params;
    const [especialista] = await model.single(id);
/*     res.json(especialista); */
    res.render("especialista", { especialista });
  };
  
  router.get("/:id", single);
  router.get("/", all);

      
/* const especialistas = [
    {
        id: 1,
        nombre: "belen",
        apellido: "lomuto",
        especialidad: "clinica",
    },
    {
        id: 2,
        nombre:"dali",
        apellido: "ortiz",
        especialidad: "clinica",
    },
];

router.get('/', (req, res) => {
    res.render('especialistas', { especialistas });
});

router.get('/all', (req, res) => {
    res.render('especialistas', { especialistas });
});

router.post('/new', (req, res) => {
    res.render('especialistas', { especialistas });
});

router.put('/modify', (req, res) => {
    res.render('especialistas', { especialistas });
}); */

module.exports = router;