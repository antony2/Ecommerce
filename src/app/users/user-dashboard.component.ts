import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: 'user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
  constructor(private ss: SessionService) {}
  logout() {
    this.ss.logout;
  }
  ngOnInit() {}
}
