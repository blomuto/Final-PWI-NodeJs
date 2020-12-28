const pool = require("./../utils/bd");
const T_PERSON = "person";

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PERSON, obj])
    .then((response) => response)
    .catch((e) => e);

module.exports = { create };
