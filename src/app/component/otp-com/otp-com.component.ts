import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-otp-com',
  imports: [IonicModule, RouterModule, FormsModule],
  templateUrl: './otp-com.component.html',
  styleUrls: ['./otp-com.component.scss'],
})
export class OtpComComponent implements OnInit {

  otpData = {
    otp: ''
  }

  onSubmit(data: any) {
    console.log("Form data:", data);
  }

  constructor() { }

  ngOnInit() { }

} 
