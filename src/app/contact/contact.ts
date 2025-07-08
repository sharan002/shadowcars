import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../Environments/environment';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../Components/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,Navbar,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  endpoint = '/sendemail';
  domain: string;
  loading = false;
  showAlert = false;
  alertMessage = '';

  formData: any = {};

  constructor(private router: Router, private http: HttpClient) {
    this.domain = environment.apiUrl;
  }

  onSubmit(contactForm: any) {
    this.loading = true;
    const userData = {
      name: contactForm.value.Name,
      phone: contactForm.value.Phone,
      email: contactForm.value.Email,
      message: contactForm.value.Message
    };

    console.log('Form submitted:', userData);

    this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
      (response: any) => {
        if (response.emailsent) {
          this.loading = false;
          this.showAlertMessage('WILL GET IN TOUCH SOON!!');
        } else {
          this.loading = false;
          this.showAlertMessage('Sorry, email not sent');
        }
      },
    );
  }

  showAlertMessage(message: string) {
    this.showAlert = true;
    this.alertMessage = message;

    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}
