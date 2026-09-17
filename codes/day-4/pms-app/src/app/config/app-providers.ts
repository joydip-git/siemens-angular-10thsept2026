import { Provider } from "@angular/core"
import { SERVICE, TOKEN } from "./constants"

export const provideProductServiceProvider = (): Provider => {
    return {
        provide: TOKEN,
        useClass: SERVICE
    }
}