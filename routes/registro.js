const express = require('express');
const router = express.Router();
const {register} = require('./../services/registro');

const showView = (req, res) => {
    res.render('registro');
};

const newUser = async (req, res) => {
    try {
        const { body: usuar } = req;
        await register(usuar);
        res.render("registro", {
            message: "Usuario creado exitosamente. Verfica tu correo para seguir",
        });
    } catch (e) {
        console.log(e);
    }
  };

router.get('/', showView);
router.post('/new', newUser);
/* router.get('/verify/:uid', verify); */
module.exports = router;