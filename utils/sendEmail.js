const nodemailer = require("nodemailer");
require('dotenv').config();

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			// host: process.env.HOST,
			service: process.env.SERVICE,
			// port: Number(process.env.EMAIL_PORT),
			// secure: Boolean(process.env.SECURE),
			auth: {
				user: "editor.1mmofficial@gmail.com",
				pass: "dkscbdqwvipuflaj",
			},
		});
		console.log(process.env.USER)
		console.log(process.env.PASS)
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			html: `<a href = ${text}>Click Here</a>`,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
