import { Component} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent  {
  vehiclesdata;

  order = 'timestamp';

  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicleData()
      .subscribe(
        vehiclesdata => this.vehiclesdata = vehiclesdata,
        error => console.log(error)
      );
  }
}
