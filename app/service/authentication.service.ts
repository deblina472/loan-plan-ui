import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { first } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) { }
    authenticateURL: string = "http://localhost:8098/authenticate/users";
    user: User = new User();
    authenticated: boolean;
    users: User[];
    userBackend: User = new User();
    logout: boolean;


    authenticate(username, password) {

        // this.user = new User();
        this.user.userName = username;
        this.user.password = password;

        this.getUser(this.user).pipe(first()).subscribe((data) => {
            // this.userBackend = new User();
            this.userBackend.userName = data.userName;
            this.userBackend.password = data.password;
            this.userBackend.role = data.role;

        });
        if (this.user.userName === this.userBackend.userName && this.user.password == this.userBackend.password) {
            this.authenticated = true;
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('role', this.userBackend.role);
        } else {
            this.authenticated = false;

        }

        return this.authenticated;
    }

    getUser(User) {
        return this.http.post<User>(this.authenticateURL, User);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        let role = sessionStorage.getItem('role');
        console.log(!(user === null))
        return !(user === null && role === null);
    }
    isUserAdmin() {
        let role = sessionStorage.getItem('role');
        return (role === 'manager');
    }


    logOut() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        this.logout = true;

    }
}



// authenticate(user) {
    //     return this.http.post<User>("http://localhost:8098/authenticate/users", user);
    // }