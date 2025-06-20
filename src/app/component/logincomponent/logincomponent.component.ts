import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logincomponent',
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.scss'
})
export class LogincomponentComponent {

  submitted = false;

  loginData = {
    email: '',
    password: ''
  }

  onSubmit(data: any) {
    this.submitted = true;
    console.log("Form data:", data);
  }
}
