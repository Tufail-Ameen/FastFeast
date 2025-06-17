import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetComComponent } from './component/forget-com/forget-com.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forget',
        component: ForgetComComponent
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      }
    ]
  },
];