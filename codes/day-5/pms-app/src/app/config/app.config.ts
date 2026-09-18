import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { provideProductServiceProvider } from './app-providers';
import { HttpFeature, HttpFeatureKind, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptorService } from '../modules/shared/services/token-interceptor-service';

const interceptors: HttpFeature<HttpFeatureKind.Interceptors> = withInterceptors([TokenInterceptorService])

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductServiceProvider(),
    provideHttpClient(interceptors)
  ]
};
