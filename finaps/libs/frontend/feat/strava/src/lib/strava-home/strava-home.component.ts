import { Component, OnInit } from '@angular/core';
import { stravaEnvironment } from '../../../secrets';

@Component({
  selector: 'finaps-strava-home',
  templateUrl: './strava-home.component.html',
  styleUrls: ['./strava-home.component.scss'],
})
export class StravaHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    console.log('click works');
    let redirect_uri = 'http://localhost:4200/strava/redirect';
    let url = `http://www.strava.com/oauth/authorize?client_id=${stravaEnvironment.STRAVA_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&approval_prompt=force&scope=activity:read_all`;
    window.location.href = url;
  }
}
