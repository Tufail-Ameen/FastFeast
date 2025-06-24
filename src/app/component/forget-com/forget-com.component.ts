import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forget-com',
  imports: [IonicModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './forget-com.component.html',
  styleUrls: ['./forget-com.component.scss'],
})
export class ForgetComComponent implements OnInit {

  // Initial Values
  forgetData = {
    email: ''
  }

  // Properties
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form.value);

    // Only check if form is valid (HTML handles all validations)
    if (form.valid) {
      console.log("Form is valid - navigating to OTP");
      this.router.navigate(['/otp']);
    } else {
      console.log("Form is invalid - validation failed");
    }
  }

  constructor(private router: Router) { }

  ngOnInit() { }
}