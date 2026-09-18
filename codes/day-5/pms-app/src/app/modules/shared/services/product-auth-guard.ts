import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenStorageService } from "./token-storage-service";

// export class ProductAuthGuard implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//         return true
//     }

// }

export const ProductAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    const tokenStorageSvc = inject(TokenStorageService)
    const router = inject(Router)

    if (!tokenStorageSvc.isLoggedIn()) {
        const requestedUrl = state.url
        router.navigate(['/login'], {
            queryParams: {
                returnUrl: requestedUrl
            }
        })
        return false
    }
    return true
}