import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private authenticateService: AuthenticationService) {
  }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }
  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }
  onLogin() {
    if (this.authenticateService.authenticate(this.loginForm.value.username, this.loginForm.value.password)) {
      this.router.navigate([''])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true;
    }
    this.username = '';
    this.password = '';
  }

}




