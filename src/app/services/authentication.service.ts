import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'token-saya';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  token = '';
  constructor(private http: HttpClient) {
    this.loadToken();
  }

  // async loadToken() {
  //   const token = await Preferences.get({ key: TOKEN_KEY });
  //   if (token && token.value) {
  //     console.log('set token: ', token.value);
  //     this.token = token.value;
  //     this.isAuthenticated.next(true);
  //   } else {
  //     this.isAuthenticated.next(false);
  //   }
  // }

  loadToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  logout() {
    localStorage.clear();
    return true;
  }

  apiURL() {
    // return 'http://localhost/backend/';
    // return 'http://localhost/belajarcrud/';
    return 'https://api-auth.dalhaqq.xyz/';
    // return 'http://192.168.1.2/belajarcrud/';
  }

  // logout(): Promise<void> {
  //   this.isAuthenticated.next(false);
  //   return Preferences.remove({ key: TOKEN_KEY });
  // }
}
