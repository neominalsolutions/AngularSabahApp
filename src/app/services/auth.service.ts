import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private tokenService: TokenService, private http: HttpClient) {}

  IsAuth(): boolean {
    const result = this.tokenService.decodeToken();

    if (result != null) {
      return true;
    }

    return false;
  }

  UserName(): string {
    return this.tokenService.getEmail();
  }

  signIn(email: string, password: string): Observable<any> {
    const loginParam = {
      email,
      password,
    };

    return this.http.post('https://localhost:5001/api/tokens', loginParam).pipe(
      tap((response) => console.log('response', response)), // genelde çekilen verinin console'lanması için kullanılır. yani çekilen veriyi yakalama işlemini yaparız.
      map((response: any) => {
        // map ile araya girip api isteği sırasında ekstra storage set etme gibi işlemleri yapabiliriz.

        this.tokenService.setAccessToken(response?.accessToken);

        // map ile araya girip result değiştirebiliriz.
        return { success: true, redirect: '/' };
      }),
      catchError((err) => {
        // console.log('err', err);
        // of operatörü istenilen tipte bir veri döndürmek için kullanılan operatör.
        // catchError try catch mekanizmasındaki hatayı temsil eder.
        return of({
          success: false,
          message: 'Kullanıcı adı veya parola hatalı',
        });
      })
    );
  }

  signOut(callback: any) {
    this.tokenService.removeAccessToken();
    callback({ redirect: '/' });
  }
}
