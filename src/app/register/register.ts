import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs';
import { environment } from '../../Environments/environment';

@Component({
  standalone : true,
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
domain : string;
  endpoint = "/register";
  constructor(private router: Router, private http: HttpClient) {
    this.domain = environment.apiUrl

  }

  loading : boolean = false;

register(f:any){
 
  const userdata={
    phone : f.value.phone,
    pass  : f.value.pass,
    name  : f.value.naming
  }

  console.log(userdata)
this.loading = true; 
 this.http.post(`${this.domain}${this.endpoint}`, userdata).subscribe(
  (response: any) => {
    if (response.success) {
      setTimeout(() => {
        this.loading = false;
        console.log("User saved");
        this.router.navigate(['/intro']);
      }, 2000);
    } else {
      this.loading = false;
      alert("Registration failed or user already exists");
    }
  },
  (error: any) => {
    this.loading = false;
    console.error('Registration failed:', error);
    alert("Registration failed");
    f.reset(); 
  }
 )
}

goBack(){

  window.history.back()
}




  valid: boolean = true;


}
