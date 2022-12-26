const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      secure: false,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD
      }
    });
  }

  async sendActivationEmail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMPT_USER,
      to,
      subject: `Activate your account on ${process.env.API_URL}`,
      text: '',
      html:
        `
          <div>
            <h2>Follow the link to activate your account</h2>
            <a href="${link}">${link}</a>
          </div>
        `
    });
  }
}

module.exports = new EmailService();
