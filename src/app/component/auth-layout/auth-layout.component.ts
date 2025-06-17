import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    IonicModule,
    RouterOutlet
  ],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
