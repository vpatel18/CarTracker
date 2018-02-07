import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.css']
})
export class VehicleMapComponent  {
  vehiclesdata;
  latitude = 40.747376;
  longitude = -74.050575;
  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicleData()
      .subscribe(
        vehiclesdata => this.vehiclesdata = vehiclesdata,
        error => console.log(error)
      );
  }
}
