import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  // canLoad(): Observable<boolean> {
  //   return this.authService.isAuthenticated.pipe(
  //     filter((val) => val !== null), // filter data auth
  //     take(1), // mengambil data auth
  //     map((isAuthenticated) => {
  //       if (isAuthenticated) {
  //         return true;
  //       } else {
  //         this.router.navigateByUrl('/');
  //         console.log('anda harus login dulu');
  //         return false;
  //       }
  //     })
  //   );
  // }
  canLoad() {
    if (this.authService.loadToken() == null) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
