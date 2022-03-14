import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

// Angularda servisler Injectable tanımlanıyor contructure'a inject edilebiliyor.

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  setAccessToken(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
  }

  removeAccessToken() {
    localStorage.removeItem('access_token');
  }

  decodeToken(): any {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken != undefined) {
      // console.log('decoded', jwt_decode(accessToken));
      return jwt_decode(accessToken);
    }

    return null;
  }

  getRoles(): string[] {
    const decoded = this.decodeToken();

    if (decoded != null) {
      return decoded?.role.split(',');
    }

    return [];
  }

  getEmail(): string {
    const decoded = this.decodeToken();

    if (decoded != null) {
      return decoded?.emailaddress;
    }

    return '';
  }
}
