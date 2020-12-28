const express = require('express');
const router = express.Router();
const {send} = require('./../services/contacto');

const showView = (req, res) => {
    res.render('contacto');
};

const exito = async (req, res) => {
    try {
        const { body: contacto } = req;
        const {contact} = contacto;
        const mailObject = {
            contact,
        };
        await send(mailObject);
        res.render("contacto", {
            message: "Consulta enviada con exito. Muchas gracias por contactarte", //o con `` pongo html
        });
    } catch (e) {
        console.log(e);
    }
  };

router.get('/', showView);
router.post('/gracias', exito);
module.exports = router;