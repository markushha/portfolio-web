import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.API_KEY as string);

interface IEmailParams {
  subject: string;
  text: string;
  to: string;
  from: string;
}

const sendEmail = async (emailParams: IEmailParams) => {
  const email = {
    to: emailParams.to,
    from: emailParams.from,
    subject: emailParams.subject,
    text: emailParams.text,
  };

  try {
    await sendgrid.send(email);
  } catch (error) {
    throw new Error('Email could not be sent, Please try again later');
  }
};

export { sendEmail };