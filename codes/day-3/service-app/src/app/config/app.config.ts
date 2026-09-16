import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { PersonService, ServiceContract } from '../services/person-service';
import { providePersonServiceProvider } from './app-providers';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePersonServiceProvider()
  ]
};
