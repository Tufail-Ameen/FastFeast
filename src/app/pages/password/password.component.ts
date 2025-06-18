import { Component, OnInit } from '@angular/core';
import { PasswordComComponent } from "../../component/password-com/password-com.component";

@Component({
  
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  imports: [PasswordComComponent],
})
export class PasswordComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
