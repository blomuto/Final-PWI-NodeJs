const pool = require("./../utils/bd");
const T_ESPECIALIDADES = "especialidades";

const get = (conditions = true) => //trae todas las categorias
  pool
    .query("SELECT * FROM ?? WHERE ? and habilitado = true", [
      T_ESPECIALIDADES,
      conditions,
    ])
    .then((result) => result)
    .catch((e) => e);

const create = async (obj) => { //crea categoria
  const query = "INSERT INTO ?? SET ?";
  const params = [T_ESPECIALIDADES, obj];
  return await pool.query(query, params);
};

const modify = async (conditions = false, id) => { //modifica deshabilita categoria
    const query = "UPDATE ?? SET habilitado = ? WHERE id = ?";
    const params = [T_ESPECIALIDADES, conditions, id];
    return await pool.query(query, params);
}; 

module.exports = { get, create, modify };