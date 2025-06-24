import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log("Form data:", form.value);
    console.log("Form valid:", form.valid);

    // Routing handling
    if (form.valid) {
      console.log("Form is valid - navigating to password");
      this.router.navigate(['/password']);
    } else {
      console.log("Form is invalid - validation failed");
    }
  }

  constructor(private router: Router) { }

  ngOnInit() { }

} 
