import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../commons/auth.response';
import { JAVEATS } from './config';
// import { JwtRequest } from '../commons/jwtRequest';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    // public generateToken(loginData: JwtRequest): Observable<JwtResponse> {
    //     return this.http.post<JwtResponse>(baseUrl + 'auth/generate-token', loginData);
    // }

    public setLogin(token: string) {
        localStorage.setItem("tokenSIV", token);
    }

    public isLogged() {
        let token = this.getToken();
        return !(token == undefined || token == '' || token == null)
    }

    public getToken() {
        return this.getUserStr()?.token;
    }

    public removeLogin(): boolean {
        localStorage.removeItem(JAVEATS.USER);
        return true
    }

    public setUserStr(user: AuthResponse) {
        localStorage.setItem(JAVEATS.USER, JSON.stringify(user));
    }

    public getUserStr(): AuthResponse | undefined {
        let userStr = localStorage.getItem(JAVEATS.USER);
        if (userStr != null) {
            return JSON.parse(userStr);
        } else {
            this.removeLogin();
            return undefined;
        }
    }

    public getUserRole(): Array<string> {
        let user = this.getUserStr();
        if(!user)
            return [];
        return user.roles;
    }
}
