import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  // canLoad(): Observable<boolean> {
  //   console.log('cek sesi login');
  //   return this.authService.isAuthenticated.pipe(
  //     filter((val) => val !== null), // Filter out initial Behaviour subject value
  //     take(1), // Otherwise the Observable doesn't complete!
  //     map((isAuthenticated) => {
  //       if (isAuthenticated) {
  //         console.log('Ada sesi login, redirect ke dashboard');
  //         // Jika ada sesi login
  //         this.router.navigateByUrl('/dashboard', { replaceUrl: true });
  //       } else {
  //         console.log('tidak ada sesi login');
  //         return true;
  //       }
  //       return false;
  //     })
  //   );
  // }
  canLoad() {
    if (this.authService.loadToken() != null) {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
    return true;
  }
}
