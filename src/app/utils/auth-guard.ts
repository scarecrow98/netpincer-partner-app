import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.authorize().pipe(
            map(resp => {
                if (resp.status === true) {
                    return true;
                }

                this.router.navigate(['/login']);
                return false;
            }),
            catchError(err => {
                this.router.navigate(['/login']);
                throw new Error(err);
            })
        );
    }

}