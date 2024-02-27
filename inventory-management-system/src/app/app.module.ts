import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MychartComponent } from './mychart/mychart.component';
import { Statistics2Component } from './statistics-2/statistics-2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashboardComponent,
    NavComponent,
    StatisticsComponent,
    MychartComponent,
    Statistics2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
