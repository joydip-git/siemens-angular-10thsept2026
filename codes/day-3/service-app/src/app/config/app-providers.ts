import { Provider } from "@angular/core";
import { TOKEN } from "./constants";
import { SERVICE } from "./constants";

export const providePersonServiceProvider = (): Provider => {
    return {
        provide: TOKEN,
        useClass: SERVICE
    }
}