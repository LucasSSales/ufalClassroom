import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityScreenComponent } from './activity-screen.component';

describe('ActivityScreenComponent', () => {
  let component: ActivityScreenComponent;
  let fixture: ComponentFixture<ActivityScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
