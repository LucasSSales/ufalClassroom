import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrateClassDialogComponent } from './registrate-class-dialog.component';

describe('RegistrateClassDialogComponent', () => {
  let component: RegistrateClassDialogComponent;
  let fixture: ComponentFixture<RegistrateClassDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrateClassDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrateClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
