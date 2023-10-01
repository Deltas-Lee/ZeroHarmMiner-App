import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinManagementComponent } from './pin-management.component';

describe('PinManagementComponent', () => {
  let component: PinManagementComponent;
  let fixture: ComponentFixture<PinManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
