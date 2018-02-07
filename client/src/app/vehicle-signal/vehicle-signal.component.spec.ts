import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSignalComponent } from './vehicle-signal.component';

describe('VehicleSignalComponent', () => {
  let component: VehicleSignalComponent;
  let fixture: ComponentFixture<VehicleSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
