import { Component } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';
@Component({
  selector: 'app-vehicle-signal',
  templateUrl: './vehicle-signal.component.html',
  styleUrls: ['./vehicle-signal.component.css']
})
export class VehicleSignalComponent  {
  vehiclesdata;
  vin_num = '';
  prop = '';
  time = new Date();

  public datasets = [{
      data: [],
      label: this.prop
    }];
  public labels = [];

  public options: any = {
    responsive: true
  };

  public Colors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];

  public chartPlot(): void {
    const vehicle_prop = this.prop;
    const time_entered = this.time;
    const current = new Date();
    this.datasets[0].data = [];
    this.datasets[0].label = this.prop;
    this.labels = [];
    let flag = false;
    for (const vehicledata in this.vehiclesdata) {
      const vehicle_time = new Date(this.vehiclesdata[vehicledata].timestamp)
      if ( vehicle_time.getTime() > time_entered.getTime() && vehicle_time.getTime() < current.getTime()) {
        flag = true;
      }
      if (flag &&  this.vehiclesdata[vehicledata].vin === this.vin_num) {
        this.datasets[0].data.push(this.vehiclesdata[vehicledata][this.prop]);
        this.labels.push(vehicle_time.toLocaleString());
      }
    }

  }

  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicleData()
      .subscribe(
        vehiclesdata => this.vehiclesdata = vehiclesdata,
        error => console.log(error)
      );
  }
}
