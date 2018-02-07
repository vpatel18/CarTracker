import { Component} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-alert',
  templateUrl: './vehicle-alert.component.html',
  styleUrls: ['./vehicle-alert.component.css']
})
export class VehicleAlertComponent {
vehiclesdata;
  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicleData()
      .subscribe(
        vehiclesdata => this.vehiclesdata = vehiclesdata,
        error => console.log(error)
      );
  }
}
