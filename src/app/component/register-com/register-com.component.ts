import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { IonRadio, IonRadioGroup } from '@ionic/angular/standalone';


@Component({
  selector: 'app-register-com',
  imports: [IonicModule, FormsModule],
  templateUrl: './register-com.component.html',
  styleUrls: ['./register-com.component.scss'],
})
export class RegisterComComponent implements OnInit {

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

  onSubmit(data: any) {
    console.log("Form data:", data);
  }

  constructor() { }

  ngOnInit() { }

}
