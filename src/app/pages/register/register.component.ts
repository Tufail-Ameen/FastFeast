import { Component, OnInit } from '@angular/core';
import { RegisterComComponent } from '../../component/register-com/register-com.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterComComponent, IonicModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
