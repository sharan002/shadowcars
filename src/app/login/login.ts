import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../Environments/environment';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

endpoint = '/login';
  domain: string;
  ENV = {
apiUrl : 'https://automationexercise.com/api/productsList'
  }
  valid: boolean = true;

  constructor(private router: Router, private http: HttpClient) {
    this.domain = this.ENV?.apiUrl

  }

  ngOnInit(): void {}

    loading: boolean = false;

  login(f:any) {
    this.loading = true;
    
    const userData = {
      phone: f.value.phone,
      pass: f.value.pass
    };
    console.log(f);



    // this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
    //   (response: any) => {
    //     this.valid = response.userExists;
    //     if (response.userExists) {
    //       this.router.navigate(['/about']);
    //     } else {
    //       console.log("USER DOES NOT EXIST");
    //     }
    //   },
    //   (error) => {
    //     console.error('Login failed:', error);
    //     alert("LOGIN FAILED")
    //   }
    // );

    
  }

  
}
