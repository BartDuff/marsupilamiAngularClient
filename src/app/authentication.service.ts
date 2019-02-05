import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Marsupilami } from './marsupilami';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth: boolean;
  isAuthChange: Subject<boolean> = new Subject<boolean>();
  currentUser: Marsupilami;
  isCurrentUser: Subject<Marsupilami> = new Subject<Marsupilami>();

  private apiLogin = '/api/login';
  private apiLogout = '/api/logout';
  constructor(private http: HttpClient) {
    this.currentUser = null;
    this.isAuth = false;
  }

  emitCredentials() {
    this.isAuthChange.next(this.isAuth);
    this.isCurrentUser.next(this.currentUser);
  }

  login(body: any): Observable<any> {
    this.isAuth = true;
    this.emitCredentials();
    return this.http.post(`${this.apiLogin}`, body);
  }

  logout() {
    this.isAuth = false;
    this.currentUser = null;
    this.emitCredentials();
    return this.http.get(`${this.apiLogout}`);
  }
}
