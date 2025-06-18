import { Component } from '@angular/core';
import { LogincomponentComponent } from '../../component/logincomponent/logincomponent.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogincomponentComponent,
    IonicModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
