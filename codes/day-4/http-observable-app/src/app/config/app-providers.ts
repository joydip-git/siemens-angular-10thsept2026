import { Provider } from "@angular/core";
import { SERVICE, TOKEN } from "./constants";

export const provideTodoService = (): Provider => {
    return {
        provide: TOKEN,
        useClass: SERVICE
    }
}