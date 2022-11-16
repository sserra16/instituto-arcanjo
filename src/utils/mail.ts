import emailjs from 'emailjs-com';

export function sendEmail(name: string, email: string) {

  emailjs.send('gmail', 'template_lt3z1ve', {
    from_name: name,
    from_email: email
  }, 'Ve44xv-KvTt7GWUGQ')
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    });

}