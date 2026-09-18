import { Service, signal } from "@angular/core";

@Service()
export class TokenStorageService {
    private _tokenStore = signal<string | undefined>(undefined)

    saveToken(token: string) {
        this._tokenStore.set(token)
    }
    removeToken() {
        this._tokenStore.set(undefined)
    }
    isLoggedIn() {
        return this.tokenStore() !== undefined
    }
    get tokenStore() {
        return this._tokenStore
    }
}