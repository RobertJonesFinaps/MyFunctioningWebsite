import { TestBed } from '@angular/core/testing';

import { StravaAuthenticatorService } from './strava-authenticator.service';

describe('StravaAuthenticatorService', () => {
  let service: StravaAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StravaAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
