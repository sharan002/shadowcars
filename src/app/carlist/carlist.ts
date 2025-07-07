import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../Components/navbar/navbar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../Environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carlist',
  imports: [FormsModule,Navbar,CommonModule],
  templateUrl: './carlist.html',
  styleUrl: './carlist.css'
})
export class Carlist {
searchText: string = '';
  carsData: any[] = [];
  filteredCarsData: any[] = [];
  selectedFilter: string = 'carName';
  modelFilter: string = '';
  priceFilter: number | null = null;
  kilometerFilter: number | null = null;
  GetC = '/files';
  domain: string;



  constructor(private http: HttpClient) {
    this.domain = environment.apiUrl
   }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {

    this.http.get<any[]>(`${this.domain}${this.GetC}`).subscribe(data => {
      this.carsData = data.map(car => ({ ...car, enlargeImage: false }));
      this.updateFilter();
    });
  }

  updateFilter() {
    const searchLowerCase = this.searchText.toLowerCase();
    this.filteredCarsData = this.carsData.filter(car => {
      return (
        car.carName.toLowerCase().includes(searchLowerCase) &&
        car.carModel.toLowerCase().includes(this.modelFilter.toLowerCase()) &&
        (this.priceFilter === null || car.carPrice <= this.priceFilter) &&
        (this.kilometerFilter === null || car.carkilometre <= this.kilometerFilter)
      );
    });
  }

  deleteCar(car: any): void {
    console.log(car);
    const endpoint = "/deletecar";
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: car,
    };

    this.http.delete(`${this.domain}${endpoint}`, httpOptions).subscribe(
      (response: any) => {
        console.log("Car deleted successfully");
      },
      (error) => {
        console.error('Car deletion failed:', error);
     
      }
    );
  
    const index = this.carsData.indexOf(car);
    if (index !== -1) {
      this.carsData.splice(index, 1);
      this.updateFilter();
    }
  }

  toggleImageSize(car: any): void {
    car.enlargeImage = !car.enlargeImage;
  }


  confirmDelete(car: any): void {
    const isVerified = this.verifyEmailOrPhoneNumber(car.email, car.c);

    if (isVerified) {
      const confirmation = confirm("Are you sure you want to delete this car?");
      if (confirmation) {
        this.deleteCar(car);
      }
    } else {
      alert("Email or phone number does not match. Deletion not allowed.");
    }
  }

  verifyEmailOrPhoneNumber(email: string, phoneNumber: string): boolean {
    const userInputEmail = prompt("Enter your email:");
    const userInputPhoneNumber = prompt("Enter your phone number:");

    return userInputEmail === email || userInputPhoneNumber === phoneNumber;
  }
  

  
  getImagePath(filename: string): string {
    console.log(filename)
    return `${this.domain}/uploads/${filename}`;
  }
}