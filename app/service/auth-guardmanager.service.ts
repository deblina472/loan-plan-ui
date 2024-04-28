import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurdAdminService implements CanActivate {

    constructor(private router: Router,
        private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserLoggedIn() && this.authService.isUserAdmin()) {
            return true;
        } else if (this.authService.isUserLoggedIn && !this.authService.isUserAdmin()) {
            alert("Not authorized");
            return false;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }

    }


}