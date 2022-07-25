import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBoiComponent } from './data-boi.component';

describe('DataBoiComponent', () => {
  let component: DataBoiComponent;
  let fixture: ComponentFixture<DataBoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataBoiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
