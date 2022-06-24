import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StravaHomeComponent } from './strava-home.component';

describe('StravaHomeComponent', () => {
  let component: StravaHomeComponent;
  let fixture: ComponentFixture<StravaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StravaHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StravaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
