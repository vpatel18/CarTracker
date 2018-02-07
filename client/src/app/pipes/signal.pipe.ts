import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signal'
})
export class SignalPipe implements PipeTransform {

  transform(vehiclesdata: any, vin_num: any, prop: any, time: any): any {

   // const vehicle_prop = prop;

    if (!vehiclesdata) {
      return [];
    }

    if (vin_num === '') {
      return null;
    }

    if (vin_num === undefined) {
      return null;
    }
    return vehiclesdata.filter(function (vehicledata) {
      const vehicle_time = vehicledata.timestamp;
      const time_entered = time;
      const current = new Date();
      let flag = false;


      if ( vehicle_time > time_entered.getTime() && vehicle_time < current.getTime()) {
        flag = true;
      }

      if (flag &&  vehicledata.vin === vin_num && vehicledata) {
        return vehiclesdata;
      }

    });
  }
}
