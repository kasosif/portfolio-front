import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, finalize, Observable, of} from "rxjs";
import {LoaderService} from "../services/loader.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  private ignoredUris = [
    '/main/resumes'
  ];
  private requests: HttpRequest<any>[] = [];
  constructor(private loaderService: LoaderService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isIgnored = this.ignoredUris.find((x) => req.url.indexOf(x) >= 0) != undefined;
    if (!isIgnored) {
      this.requests.push(req);
      this.loaderService.isLoading.next(true);
    }
    if (req.url.indexOf('assets/i18n') === -1)  {
      const reqWithoutToken = req.clone({
        url: `${environment.portfolioCoreUrl}${req.url}?lang=${localStorage.getItem('lang')}`
      });
      return next.handle(reqWithoutToken).pipe(
        catchError((err, caught) => {
          console.log(err);
          console.log(caught);
          return of(null);
        }),
        finalize(() => {
          if (!isIgnored) {
            this.removeRequest(req);
          }
        }),
      );
    } else {
      return next.handle(req).pipe(
        finalize(() => {
          if (!isIgnored) {
            this.removeRequest(req);
          }
        })
      );
    }
  }


  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }
}
