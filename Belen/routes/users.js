var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1,
    nombre: "María",
    apellido: "Ortiz",
    mail: "danyterrado@gmail.com",
    tel: "223 555 5555",
    usuario: "danyterrado",
    nacionalidad: "Argentina",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Lomuto",
    mail: "b.lomuto@gmail.com",
    tel: "223 444 4444",
    usuario: "blomuto",
    nacionalidad: "Argentina",
  },
  {
    id: 3,
    nombre: "Juan",
    apellido: "Pérez",
    mail: "juanperez@gmail.com",
    tel: "223 654 4321",
    usuario: "jperez",
    nacionalidad: "Brasil",
  },
];

const pacientes = (req,res) => {
  res.render('users', {users, multiple: true});
};

const single = (req,res) => {
  const {id} = req.params;
  const paciente = users.find((user) => user.id == id);
  res.render('users', {paciente, multiple: false});
};

router.get('/', pacientes);
router.get('/single/:id', single);
module.exports = router;