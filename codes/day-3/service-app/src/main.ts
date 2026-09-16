import { bootstrapApplication } from '@angular/platform-browser';
import { Main } from './app/components/main/main';
import { appConfig } from './app/config/app.config';



bootstrapApplication(Main, appConfig)
  .catch((err) => console.error(err));
