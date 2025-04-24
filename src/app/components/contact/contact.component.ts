import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [FormsModule]
})
export class ContactComponent {
  onSubmit() {
    const serviceID = 'service_jdvy1js';
    const templateID = 'template_s3mqooi';
    const userID = 'YKAnBLV-R7dK-rTyI';

    emailjs.sendForm(serviceID, templateID, document.forms[0], userID)
      .then(() => alert('Message sent successfully!'))
      .catch(error => alert('Something went wrong: ' + error.text));
  }
}




// const serviceID = 'service_jdvy1js';
// const templateID = 'template_s3mqooi';
// const userID = 'YKAnBLV-R7dK-rTyI';