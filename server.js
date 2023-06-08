const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
// Localhost 5000 é a porta ouvinte
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


// Aqui fica o serviço de email com a senha que eu gerei
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "almeidacaick2@gmail.com",
    pass: "cbfuxhtadhlwdpqk"
  },
});

// Verifica se está tudo certo
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// A maneira que estamos enviando esses dados é que faremos uma solicitação de postagem para nossa postagem criada como API para nossa porta 5000 definida lá em cima
router.post("/contact", (req, res) => {
  // o Require passando os dados do nosso formulário
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "almeidacaick2@gmail.com",
    subject: "Envio de formulário de contato - Portfolio",
    html: `<p>Nome: ${name}</p>
           <p>Email: ${email}</p>
           <p>Telefone: ${phone}</p>
           <p>Mensagem: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});