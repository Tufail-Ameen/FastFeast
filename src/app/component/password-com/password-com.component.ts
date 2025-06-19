import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-password-com',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './password-com.component.html',
  styleUrls: ['./password-com.component.scss'],
})
export class PasswordComComponent implements OnInit {

  changePasswordData = {
    newPassword: '',
    confirmPassword: ''
  }

  onSubmit(data: any) {
    console.log("Form data:", data);
  }


  constructor() { }

  ngOnInit() { }

}
