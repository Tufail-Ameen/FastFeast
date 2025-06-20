import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-password-com',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './password-com.component.html',
  styleUrls: ['./password-com.component.scss'],
})
export class PasswordComComponent implements OnInit {
  @ViewChild('changePasswordForm') changePasswordForm!: NgForm;

  submitted = false;

  changePasswordData = {
    newPassword: '',
    confirmPassword: ''
  }

  onSubmit(data: any) {
    this.submitted = true;

    // // Check if form is valid
    // if (this.changePasswordForm.invalid) {
    //   console.log('Form is invalid');
    //   return;
    // }

    console.log("Form data:", data);
  }


  constructor() { }

  ngOnInit() { }

}
