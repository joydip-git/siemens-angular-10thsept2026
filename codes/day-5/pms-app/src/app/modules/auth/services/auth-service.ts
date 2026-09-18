import { inject, Injectable, Service } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../products/models/apiresponse';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../../../config/constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient)

    register(user: User): Observable<ApiResponse<User>> {
        return this.http.post<ApiResponse<User>>(`${AUTH_API_URL}/register`, user)
    }

    login(user: User): Observable<ApiResponse<string>> {
        return this.http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
    }
}
