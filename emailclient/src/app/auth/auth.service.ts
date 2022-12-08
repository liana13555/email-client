import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

interface usernameAvailableResponse {
  available: boolean
}

interface SignupCredentials {
  username:  string,
  password: string,
  passwordConfirmation: string
}

interface SignupResponse {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com'
  signedin$ = new BehaviorSubject(false)

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<usernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      username: username
    })
  }

  signup(credentials: any) {
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials )
      .pipe(
        tap(() => {
          this.signedin$.next(true)
        })
      )
  }

  checkAuth() {
    return this.http.get(`${this.rootUrl}/auth/signedin`).pipe(
      tap(response=> {
        console.log(response);        
      }) 
    )
  }
}
