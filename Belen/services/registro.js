const { create: createPerson } = require("./../models/personas");
const { create: createUser } = require("./../models/usuarios");
const { send } = require("./../services/mail");
const sha1 = require("sha1");
const { v4: uid } = require("uuid");

const register = async ({nombre, apellido, mail, telefono, usuario, password,} = {}) => {
  try {
    const { insertId: idPerson } = await createPerson({nombre, apellido, mail, telefono, usuario, password});
    const { insertId: idUsuario } = await createUser({usuario, password: sha1(password), idPerson, confirmacionCorreo: uid(),});
    return idUsuario;
    
/*     const mailObject = {
      mail,
      message: `
          <h2>Gracias por registrarte ${nombre} ${apellido}</h2>
          <a href=${process.env.URL_SERVER}:${process.env.PORT}/registro/verify?uid=${uid}>Click aquí para verificar tu cuenta</a>
        `,
    };
    await send(mailObject); */
  } catch (e) {
    console.log(e);
  }
};

module.exports = { register };