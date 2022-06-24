import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RijksHomeComponent } from './rijks-home.component';

describe('RijksHomeComponent', () => {
  let component: RijksHomeComponent;
  let fixture: ComponentFixture<RijksHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RijksHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RijksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
