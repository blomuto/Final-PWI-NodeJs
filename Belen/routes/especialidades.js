const express = require('express');
const router = express.Router();
const model = require('./../models/especialidades');

const all = async (req, res) => {
    const especialidades = await model.get();
    res.json(especialidades);
};

const create = async (req, res) => {
    console.log(req.body);
    const obj = ({ nombre } = req.body);
    const { createId } = await model.create(obj);
    res.json(createId);
};
  
const modify = async (req, res) => {
    const obj = ({ nombre } = req.body);
    const {modifyId} = await model.modify(obj);
    res.json(modifyId);
};

router.get('/', all);
router.post('/create', create);
router.put('/modify', modify); 

module.exports = router;