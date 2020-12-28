const pool = require("./../utils/bd");
const T_ESPECIALISTAS = "especialistas";
const T_ESPECIALIDADES = "especialidades";

const get = async () => {
    const query =
      "SELECT idEspecialidad, es.nombre, es.apellido, es.id, esdad.nombre as nombreEspecialidad  FROM ?? as es JOIN ?? as esdad on es.idEspecialidad = esdad.id where es.habilitado = ?";
    const params = [T_ESPECIALISTAS, T_ESPECIALIDADES, true];
    return await pool.query(query, params);
};

const single = async (id) => {
    const query =
      "SELECT idEspecialidad, es.nombre, es.apellido, es.id, esdad.nombre as nombreEspecialidad  FROM ?? as es JOIN ?? as esdad on es.idEspecialidad = esdad.id where es.habilitado = ? and es.id = ?";
    const params = [T_ESPECIALISTAS, T_ESPECIALIDADES, true, id];
    return await pool.query(query, params);
};
  
const create = (obj) =>
    pool
      .query("INSERT INTO ?? SET ?", [T_ESPECIALISTAS, obj])
      .then((result) => result)
      .catch((e) => e);

module.exports = { get, single, create };