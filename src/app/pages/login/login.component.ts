import { Component } from '@angular/core';
import { LogincomponentComponent } from '../../component/logincomponent/logincomponent.component';
import { IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogincomponentComponent,
    IonGrid,
    IonRow,
    IonCol
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
