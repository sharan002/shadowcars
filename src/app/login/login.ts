import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterLink],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
login(f : any){
console.log("Hii")
}

showRegistrationForm(){
console.log("Hello")
}
}
