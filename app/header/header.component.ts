import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoutFlag: boolean;

  constructor(public authentication: AuthenticationService, private router: Router) {
    this.logoutFlag = authentication.logout;
    console.log("Logout Flag:" + this.logoutFlag);

  }

  ngOnInit(): void {

  }
  loginStatus() {
    return this.authentication.isUserLoggedIn();
  }
  logoutStatus() {
    setTimeout(() => {

      this.router.navigate(['/login']);
      return this.authentication.logOut();
    }, 1000);
  }
}



