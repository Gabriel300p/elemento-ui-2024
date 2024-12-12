import emailHTML from "@/email/emailHTML";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const contact = req.body;

  console.log(contact);
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

    return new Response(JSON.stringify("Dados salvos no banco de dados"), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Ocorreu um erro ao enviar o e-mail", { status: 500 });
  }
}
