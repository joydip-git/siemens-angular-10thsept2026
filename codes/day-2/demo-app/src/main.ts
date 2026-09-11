import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { appConfig } from "./app/app.config";

// setTimeout(
//   () => {
bootstrapApplication(App, appConfig)
  .catch((err) => console.log(err))
//   },
//   3000
// )
