import { Component } from '@angular/core';
import { LoginService } from '../UserForms/shared/login.service';
@Component({
  selector: 'userhome-page',
  templateUrl: './userhome.component.html'
})
export class UserHomeComponent {
  _user;
  constructor(private LoginService: LoginService){}

  ngOnInit(){
    console.log('user', this.LoginService.User);
    this.LoginService.User.subscribe(user => {
      console.log('subscribed to user', user);
      this._user = user;
    });
  }
}