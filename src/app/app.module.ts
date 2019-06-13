import { UserDashboardComponent } from './users/user-dashboard.component';
import { UserLoginComponent } from './users/user-login.component';
import { HeaderComponent } from './shared/header.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

var userRules = [
  { path: 'login', component: UserLoginComponent },
  { path: '', component: UserDashboardComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    RouterModule,
    UserModule,
    SharedModule,
    RouterModule.forRoot(userRules)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
