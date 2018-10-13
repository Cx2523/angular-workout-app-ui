import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './LogInForm.component.html',
  styleUrls: ['./LogInForm.component.css']
})
export class LoginFormComponent {
    username :string = "Test username"
    password :string = "test pasword"

    constructor(private LoginService: LoginService, private router: Router){}

    Login(){
        alert("login");
        this.LoginService.postLogin({username: this.username, password: this.password}).then(res => {
            // sessionStorage['User'] = JSON.stringify(res);
            this.router.navigate(['user']);
        });
    }


}
