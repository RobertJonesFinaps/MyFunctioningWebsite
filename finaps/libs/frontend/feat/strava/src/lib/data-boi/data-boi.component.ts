import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivityList } from '../activity-list';
import { StravaAuthenticatorService } from '../strava-authenticator/strava-authenticator.service';

@Component({
  selector: 'finaps-data-boi',
  templateUrl: './data-boi.component.html',
  styleUrls: ['./data-boi.component.scss'],
})
export class DataBoiComponent implements OnInit {
  private authToken: string = '';

  constructor(
    private http: HttpClient,
    private auth: StravaAuthenticatorService
  ) {}
  ngOnInit(): void {
    this.authToken = this.auth.getAuthorizationToken();

    const params = new HttpParams()
      .set('', '')
      .append('', '')
      .append('page', 1)
      .append('per_page', 15);
    const url = 'https://www.strava.com/api/v3/athlete/activities';

    this.http
      .get<ActivityList[]>(url, {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authToken}`
        ),
        params: params,
      })
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
