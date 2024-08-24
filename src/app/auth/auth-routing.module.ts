import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import SignInComponent from './pages/sign-in/sign-in.component';
import SignUpComponent from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
