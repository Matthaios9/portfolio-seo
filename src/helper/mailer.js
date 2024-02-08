import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// import { Resend } from "resend";

// export const sendAlertEmail = async (email, name) => {
//   try {
//     // create a hased token
//     console.log("use email ", email);
//     console.log("use name ", name);
//     console.log("from env email", process.env.FROM_EMAIL);
//     console.log("from env user", process.env.EMAIL_HOST_USER);

//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_HOST_USER,
//         pass: process.env.EMAIL_HOST_PASSWORD,
//       },
//     });
//     const base_url = process.env.NEXTAUTH_URL;
//     const pdfUrl =
//       base_url + `/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf`;
//     const defaultEmaiemplate = `<p>Hi, Congratulation your request for Resume approved on <a href="${base_url}" traget="_blank"">zutet.com</a>. Your can signin to download my resume</p>`;
//     // const emailHtml = render(AlertTemplate({ name: name }));

//     const options = {
//       from: process.env.FROM_EMAIL,
//       to: email,
//       subject: "Resume Request on Zutet.com",
//       html: defaultEmaiemplate,
//     };

//     const meailResponce = await transporter.sendMail(options);
//     console.log("mail res", meailResponce);
//     return meailResponce;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const sendEmail = async (email, name, file) => {
  try {
    //test
    // var transport = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: "0c945ca4475fd2",
    //     pass: "f23354e491eccc",
    //   },
    // });

    //zutet
    var transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      auth: {
        user: "dev@zutet.com",
        pass: "Zutet123456789?",
      },
    });
    const base_url = process.env.NEXTAUTH_URL;
    const pdfUrl = file; //base_url + `/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf`;
    const defaultEmaiemplate = `<p>Hi, Congratulation your request for Resume approved on <a href="${base_url}" traget="_blank"">zutet.com</a>. Your can signin to <a href="${pdfUrl}">download</a> my resume</p>`;
    const options = {
      from: "dev@zutet.com",
      to: email,
      subject: "Resume Request on Zutet.com",
      html: defaultEmaiemplate,
    };

    const mailResponce = transport.sendMail(options);
    return mailResponce;
  } catch (error) {
    throw new Error(error);
  }
};
