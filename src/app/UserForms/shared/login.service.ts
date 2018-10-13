import { Injectable } from "@angular/core";
import { Login } from "./login.model";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};


@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient){}

    postLogin(login: Login) {
        return this.httpClient.post('https://fitness-tracker-1.herokuapp.com/login', login, httpOptions)
            .toPromise();     
    }
}