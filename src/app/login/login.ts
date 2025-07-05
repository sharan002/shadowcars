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

  valid: boolean = true;

  constructor(private router: Router, private http: HttpClient) {
    this.domain = environment.apiUrl

  }

  ngOnInit(): void {}

    loading: boolean = false;

  login(f:any) {
    this.loading = true;
    
    const userData = {
      phone: f.value.phone,
      pass: f.value.pass
    };
    console.log(userData);

console.log(`${this.domain}${this.endpoint}`);

  this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
    (response: any) => {
      this.loading = false;
      this.valid = response.userExists;

      if (response.userExists) {
        this.router.navigate(['/intro']);
      } else {
        console.log("USER DOES NOT EXIST");
        f.reset(); 
      }
    },
    (error: any) => {
      this.loading = false;
      console.error('Login failed:', error);
      alert("LOGIN FAILED");
      f.reset(); 
    }
  );



    
  }

  
}
