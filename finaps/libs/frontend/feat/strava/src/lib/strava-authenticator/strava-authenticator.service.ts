import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../token-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { stravaEnvironment } from '../../../secrets';

@Injectable({
  providedIn: 'root',
})
export class StravaAuthenticatorService {
  private authToken: TokenResponse = {};
  constructor(private http: HttpClient) {}

  getAuthorizationToken(): string {
    let token = this.authToken.access_token;
    if (token) {
      return token;
    } else {
      let tokenFromStorage = localStorage.getItem('authToken');
      if (tokenFromStorage) {
        return tokenFromStorage;
      }
      return '';
    }
  }

  setAuthorizationToken(token: TokenResponse): void {
    console.log('setting token');

    this.authToken = token;
    if (token && token.access_token) {
      localStorage.setItem('authToken', token.access_token);
    }
  }
  postAuth(code: string): Observable<TokenResponse> {
    let params = new HttpParams()
      .set('client_id', stravaEnvironment.STRAVA_APP_CLIENT_ID)
      .append('client_secret', stravaEnvironment.STRAVA_APP_CLIENT_SECRET)
      .append('code', code)
      .append('grant_type', 'authorization_code');
    let url = 'https://www.strava.com/api/v3/oauth/token';

    let request = this.http.post<TokenResponse>(url, code, { params: params });

    // Double check if it's necessary to return anything here
    return request;
  }
}
