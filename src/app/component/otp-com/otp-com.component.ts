import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-otp-com',
  imports: [IonicModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './otp-com.component.html',
  styleUrls: ['./otp-com.component.scss'],
})
export class OtpComComponent implements OnInit {

  submitted = false;

  otpData = {
    otp: ''
  }

  onSubmit(data: any) {
    this.submitted = true;
    console.log("Form data:", data);
    
    // Check if OTP is provided
    if (!data.otp || data.otp.toString().trim() === '') {
      console.log('OTP is required');
      return;
    }

    // Check if OTP is 6 digits
    if (data.otp.toString().length !== 6) {
      console.log('OTP must be 6 digits');
      return;
    }

    // Check if OTP contains only numbers
    if (!/^\d{6}$/.test(data.otp.toString())) {
      console.log('OTP must contain only numbers');
      return;
    }

    console.log("OTP validated successfully, navigating to password page");
    this.router.navigate(['/password']);
  }

  isValidOtpFormat(): boolean {
    return !!(this.otpData.otp && /^\d{6}$/.test(this.otpData.otp.toString()));
  }

  constructor(private router: Router) { }

  ngOnInit() { }

} 
