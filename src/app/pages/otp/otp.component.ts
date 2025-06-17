import { Component, OnInit } from '@angular/core';
import { OtpComComponent } from "../../component/otp-com/otp-com.component";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  imports: [OtpComComponent],
})
export class OTPComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
