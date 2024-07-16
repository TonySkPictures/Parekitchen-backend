
const nodemailer = require('nodemailer');

module.exports = {
  sendForm: async (ctx) => {
    try {
      const {
        name,
        surname,
        email,
        phone,
        street,
        postalCode,
        city,
        country,
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
          filename: `Configuration #${configId}.png`,
          path: `${screenshot}`
        }]
      };
      const otherEmailMessage = {
        from: 'hello@pare-kitchen.info',
        to: 'p.mueller@franzmueller-pruem.de',
        subject: `Configuration Submission #${configId}`,
        html: `<p>New configuration submission received:</p>
               <p><strong>Name:</strong> ${name} ${surname}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Street:</strong> ${street}</p>
               <p><strong>City:</strong> ${city}</p>
               <p><strong>Postal Code:</strong> ${postalCode}</p>
               <p><strong>Country:</strong> ${country}</p>
               <p><strong>Configuration Code:</strong> ${configId}</p>
               `
      };
      await transporter.sendMail(emailMessage);

      await transporter.sendMail(otherEmailMessage);
      ctx.send({ message: `Email sent successfully! Sent to ${emailMessage.to}` });
    } catch (error) {
      ctx.send({ error: 'Failed to send email', details: error });
    }
  },
};
