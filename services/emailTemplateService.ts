const GetEmailSubject = async (subjectPath: string) => {
  const buffer = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/utils/email_templates/${subjectPath}`);
      
  return await buffer.text();
};

const replaceTemplate = (emailBody: string, data: any) => {
  for (const key in data) {
      const regex = new RegExp("\\${" + key + "}", "g")
      emailBody = emailBody.replace(regex, data[key]);
  }
  return emailBody;
}

const GetEmailBody = async (bodyPath: string, data?: any) => {      
  const bufferBody = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/utils/email_templates/${bodyPath}`);
  const emailBody = await bufferBody.text();        
  const emailBodyParsed =  replaceTemplate(emailBody, data);
  return emailBodyParsed.toString();
};

export { GetEmailSubject, GetEmailBody };