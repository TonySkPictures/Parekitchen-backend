
const nodemailer = require('nodemailer');

module.exports = {
  sendForm: async (ctx) => {
    try {
      const {
        name,
        surname,
        email,
        configId,
        screenshot

      } = ctx.request.body.data;

      const transporter = nodemailer.createTransport({
        service: 'one',
        auth: {
          user: 'hello@pare-kitchen.info',
          pass: process.env.CONTACT_FORM_TOKEN,
        },
      });


      // let emailText =
      //   `Full Name: ${name} ${surname}\n` +
      //   `Email: ${email}\n`;



      const emailMessage = {
        from: 'hello@pare-kitchen.info',
        to: `hello@pare-kitchen.info, ${email}`,
        subject: `Configuration Submition`,
        html: `<p>
         <p>Thank you for your
         request! One of our employees will contact you with your offer within the next 3 to 4 working
         days.<br/><br/>Enclosed you will find your configuration. Your configuration code is: <strong>${configId}</strong>.<br/><br/>You can
         call up your configuration at any time using your code.<br/><br/>Thank you very much.<br/>Yours sincerely,<br/>
         PARE-Kitchen Team.</p>`,
        attachments: [{
          filename: `Configuration ${configId}.png`,
          path: `${screenshot}`
        }]
      };
      console.log(emailMessage);
      await transporter.sendMail(emailMessage);
      ctx.send({ message: `Email sent successfully! Sent to ${emailMessage.to}` });
    } catch (error) {
      ctx.send({ error: 'Failed to send email', details: error });
    }
  },
};
