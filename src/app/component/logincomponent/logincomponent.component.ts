import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logincomponent',
  standalone: true,
  imports: [IonicModule, RouterLink, FormsModule],
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.scss'
})
export class LogincomponentComponent {

  loginData = {
    email: '',
    password: ''
  }

  onSubmit(data: any) {
    console.log("Form data:", data);
  }
}
