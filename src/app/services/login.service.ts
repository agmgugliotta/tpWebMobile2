import { Injectable } from '@angular/core';
import User from './models/User';
import {HttpClient} from '@angular/common/http';
import iUser from './models/iUser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(id: string, mdp: string): Observable<iUser[]> {
    return this.http.get<iUser[]>('https://jsonplaceholder.tipycode.com/users');
  }
}
