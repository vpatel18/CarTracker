import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAlertComponent } from './vehicle-alert.component';

describe('VehicleAlertComponent', () => {
  let component: VehicleAlertComponent;
  let fixture: ComponentFixture<VehicleAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
