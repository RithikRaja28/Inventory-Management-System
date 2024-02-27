import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  { path: 'dashboard', component: DashboardComponent},
  {
    path: 'logout',
    component: UserLoginComponent,
  },
  {
    path: 'chart',component:MychartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
