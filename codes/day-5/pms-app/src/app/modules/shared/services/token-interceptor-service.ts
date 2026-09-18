import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage-service";

// @Injectable()
// export class TokenInterceptorService implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//        return next.handle(req)
//     }

// }

export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const tokenStorageSvc = inject(TokenStorageService)
    const token = tokenStorageSvc.tokenStore()
    if (token) {
        const injectedReq = req.clone({
            headers: req.headers.append("Authorization", `Bearer ${token}`)
        })
        return next(injectedReq)
    } else
        return next(req)
}