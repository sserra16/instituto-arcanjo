import emailjs from "emailjs-com";

export function ebookEmail(name: string, email: string, telefone: string) {
  emailjs
    .send(
      "gmail",
      "template_lt3z1ve",
      {
        from_name: name,
        from_email: email,
        from_telefone: telefone,
      },
      "Ve44xv-KvTt7GWUGQ"
    )
    .catch((err) => {
      console.log(err);
    });
}

export async function palestrasEmail(
  name: string,
  email: string,
  telefone: string,
  cidade: string,
  message: string
) {
  await emailjs
    .send(
      "gmail",
      "template_id9pgaj",
      {
        from_name: name,
        from_email: email,
        from_tel: telefone,
        from_cidade: cidade,
        message: message,
      },
      "Ve44xv-KvTt7GWUGQ"
    )
    .catch((err) => {
      console.log(err);
    });
}
