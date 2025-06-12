import { Component } from '@angular/core';
import { LogincomponentComponent } from '../../component/logincomponent/logincomponent.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogincomponentComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
