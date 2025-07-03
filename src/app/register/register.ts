import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs';

@Component({
  standalone : true,
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

register(f:any){

}

goBack(){

  window.history.back()
}









endpoint = '/login';
  ENV = {
apiUrl : 'https://jsonplaceholder.typicode.com/posts'
  }
  valid: boolean = true;



  
  constructor(private http: HttpClient ){
        console.log("Hiiii",`${this.ENV.apiUrl}`);
        this.http.get(`${this.ENV.apiUrl}`).subscribe((response:any) => {
        console.log(response)
    })
  }


}
