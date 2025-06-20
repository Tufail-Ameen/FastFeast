import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { IonRadio, IonRadioGroup } from '@ionic/angular/standalone';


@Component({
  selector: 'app-register-com',
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './register-com.component.html',
  styleUrls: ['./register-com.component.scss'],
})
export class RegisterComComponent implements OnInit {

  // Initial values
  registerData = {
    firstName: '',
    lastName: '',
    gender: 'male',
    language: {
      english: true,
      spanish: false
    },
    email: '',
    phoneNo: '',
    city: 'lahore',
    password: '',
    description: '',
  }

  // Properties
  submitted = false;

  onSubmit(data: any) {
    this.submitted = true;
    console.log("Form data:", data);
  }

  constructor() { }

  ngOnInit() { }

}
