import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import AlertTemplate from "../../emails/AlertTemplate";

export const sendAlertEmail = async (email, name) => {
  try {
    // create a hased token
    console.log("use email ", email);
    console.log("use name ", name);
    console.log("from env email", process.env.FROM_EMAIL);
    console.log("from env user", process.env.EMAIL_HOST_USER);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });
    const base_url = process.env.NEXTAUTH_URL;
    const pdfUrl =
      base_url + `/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf`;
    const defaultEmaiemplate = `<p>Hi, Congratulation your request for Resume approved on <a href="${base_url}" traget="_blank"">zutet.com</a>. Your can signin to download my resume</p>`;
    // const emailHtml = render(AlertTemplate({ name: name }));

    const options = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Resume Request on Zutet.com",
      html: defaultEmaiemplate,
    };

    const meailResponce = await transporter.sendMail(options);
    console.log("mail res", meailResponce);
    return meailResponce;
  } catch (error) {
    throw new Error(error);
  }
};
