import { Component, OnInit } from '@angular/core';
import { RegisterComComponent } from '../../component/register-com/register-com.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterComComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
