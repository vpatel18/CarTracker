import { Component} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent  {

  vehicles;

  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicles()
      .subscribe(
        vehicles => this.vehicles = vehicles,
        error => console.log(error)
      );
  }
}
