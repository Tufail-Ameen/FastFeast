import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forget-com',
  imports: [IonicModule, RouterLink],
  templateUrl: './forget-com.component.html',
  styleUrls: ['./forget-com.component.scss'],
})
export class ForgetComComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}