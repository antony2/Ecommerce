import { User } from './../users/user';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  currentUser: User;

  constructor() {
    this.getCurrentUser();
  }

  setCurrentUser(data: User) {
    this.currentUser = data;
    localStorage.setItem('user', JSON.stringify(data));
  }

  getCurrentUser() {
    var data = localStorage.getItem('user');
    if (data) this.currentUser = JSON.parse(data);
    return this.currentUser;
  }
  isLoggedIn() {
    var data = localStorage.getItem('user');
    if (data) this.currentUser = JSON.parse(data);
    if (this.currentUser == null) return false;
    else return true;
  }

  logout() {
    this.currentUser = null;
    localStorage.clear();
  }
}
