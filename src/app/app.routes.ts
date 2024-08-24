import { Routes } from '@angular/router';
import HomeComponent from './core/pages/home/home.component';
import ProfileComponent from './profile/profile.component';
import OrdersComponent from './orders/orders.component';
import PageNotFoundComponent from './core/pages/page-not-found/page-not-found.component';
import AdminComponent from './admin/admin.component';
import { AuthGuard } from './auth/components/auth.guard';

const routes: Routes = [
  // TODO: Add path guard for profile, orders, admin, home
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found',
  },
];

export default routes;
