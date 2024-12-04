import emailHTML from "@/email/emailHTML";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const contact = req.body;
  try {
    // Enviar e-mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: "contact@checkmidia.com",
        pass: "mnaxnflppjnnbeof",
      },
    });
    const mailOptions = {
      name: "Check Mídia",
      from: "Check Mídia",
      to: contact.email,
      subject: "Obrigado por entrar em contato!",
      html: emailHTML,
    };
    await transporter.sendMail(mailOptions);

    // // Salvar dados no banco de dados
    // await prisma.contact.create({
    //   data: {
    //     name: contact.name,
    //     email: contact.email,
    //     howYouKnow: contact.howYouKnow,
    //     howToHelp: contact.howToHelp,
    //     message: contact.message,
    //   },
    // });
    console.log("Dados salvos no banco de dados");
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocorreu um erro ao enviar o e-mail" });
  }
}
