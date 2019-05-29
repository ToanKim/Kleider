import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(
    public auth: AuthService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    var fsd = JSON.parse(localStorage.getItem(`${uid}`));
    // console.log(uid);
    if (JSON.parse(localStorage.getItem(`${uid}`)) == null) {
      
      alert(`You don't have any products in your cart`);
      this.router.navigate(['/homepage']);
    }
    return true;
  }
}
