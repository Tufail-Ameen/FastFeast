import { Component } from '@angular/core';
import { LogincomponentComponent } from '../../component/logincomponent/logincomponent.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  imports: [
    LogincomponentComponent,
    IonicModule
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
