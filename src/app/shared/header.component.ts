import { SessionService } from './session.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appheader',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  currentUserName: string = '';
  constructor(private router: Router, private ss: SessionService) {}
  getLoginInformation() {
    var result = this.ss.isLoggedIn();
    return result;
  }
  getCurrentUserName() {
    var currentUser = this.ss.getCurrentUser();
    if (currentUser != null) {
      this.currentUserName = currentUser.username;
    }
    console.log('getCurrentUserName');
    return this.currentUserName;
  }

  displayCart() {
    this.router.navigate(['/store/cart']);
  }

  m1() {
    this.ss.logout();
    this.router.navigate(['/store']);
  }

  m2() {
    this.router.navigate(['/userDashboard']);
  }
}
