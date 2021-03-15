import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const _req = req.clone({
            url: environment.apiUrl + req.url,
            setHeaders: {
                'Authorization': 'Bearer ' + (localStorage.getItem('jwt') || '')
            }
        });


        return next.handle(_req).pipe(
            tap(resp => {

            }),
            catchError(err => {
                throw err;
            })
        )
    }

}