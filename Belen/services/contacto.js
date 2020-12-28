const nodemailer = require('nodemailer');

const send = async ({mail, nombre, asunto, consulta, message}) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com", // hostname
            secure: false, // true si tengo certificados ssl
            port: 587, // 465 si tengo ssl
            /* service: process.env.MAIL_SERVICE, */
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const info = {
            to: process.env.MAIL_USER,
            from: mail,
            message: `
            Nombre: ${nombre} 
            Mail: ${mail}
            Asunto: ${asunto}
            Mensaje: ${consulta}
            `,
        };

        const {messageId} = await transporter.sendMail(info);
        return messageId;
    } catch (e) {
        console.log(e);
    };
};

module.exports = {send};