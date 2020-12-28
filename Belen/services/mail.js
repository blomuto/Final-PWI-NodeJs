const nodemailer = require('nodemailer');

const send = async ({mail, subject = "Gracias por registrarte"}) => {
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
            from: "noreply",
            to: mail, //o listado de mails "estudio.xivo@gmail.com, b.lomuto@gmail.com" en caso de mailing
            subject: subject, //o "miasunto"
            html: `
            <html>
                <body>
                    <h1 style="color: green">Contacto de la web</h1>
                    <h5>Gracias por registrarte</h5>
                    <p>Hacé click en este enlace para activarla!</p>
                    <a href="">Activar cuenta</a>
                </body>
            </html>
            `,
        };
        const {messageId} = await transporter.sendMail(info);
        return messageId;
    } catch (e) {
        console.log(e);
    };
};

module.exports = {send};