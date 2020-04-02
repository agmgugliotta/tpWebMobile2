import { Injectable } from '@angular/core';
import User from './models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(id: string, mdp: string): User {
    this.http.get('https://jsonplaceholder.tipycode.com/users').subscribe(value => {
      console.log(value);
    });
    return new User(id, 'Nom',  'Prénom', 'email@ynov.com');
  }
}
