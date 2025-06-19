import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forget-com',
  imports: [IonicModule, RouterLink, FormsModule],
  templateUrl: './forget-com.component.html',
  styleUrls: ['./forget-com.component.scss'],
})
export class ForgetComComponent implements OnInit {

  forgetData = {
    email: ''
  }

  onSubmit(data: any) {
    console.log("Form data:", data);
  }

  constructor() { }

  ngOnInit() { }

}