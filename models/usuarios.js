const pool = require("./../utils/bd");
const T_USERS = "users";
const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USERS, obj])
    .then((result) => result)
    .catch((e) => e);

const auth = ({ usuario, password }) =>
  pool
    .query(
      "SELECT id FROM ?? WHERE usuario = ? and password = ? and habilitado = 1 and eliminado = 0 and role = 1",
      [T_USERS, usuario, password]
    )
    .then((result) => result)
    .catch((e) => e);

const update = ({ uid, id, data }) =>
  pool
    .query("UPDATE ?? SET ? WHERE confirmacionCorreo = ? OR id = ?", [
      T_USERS,
      obj,
      uid,
      id,
    ])
    .then((result) => result)
    .catch((e) => e);

module.exports = { create, auth, update };