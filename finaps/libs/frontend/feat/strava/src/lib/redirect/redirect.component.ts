import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StravaAuthenticatorService } from '../strava-authenticator/strava-authenticator.service';

@Component({
  selector: 'finaps-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedirectComponent implements OnInit {
  clicked = false;
  name = '';
  code: string | null = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: StravaAuthenticatorService
  ) {}
  ngOnInit(): void {
    // This junk needs to be serviced
    this.route.queryParams.subscribe((params) => {
      this.code = params['code'];
    });

    if (this.code) {
      this.auth.postAuth(this.code).subscribe((val) => {
        this.auth.setAuthorizationToken(val);
        this.router.navigate(['strava/data-boi']);
      });
    }
  }
}
