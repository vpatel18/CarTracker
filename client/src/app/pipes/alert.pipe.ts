import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alert'
})
export class AlertPipe implements PipeTransform {

  transform(vehiclesdata: any, track: any): any {
    if (!vehiclesdata) {
      return [];
    }

    if (track === '') {
      return null;
    }

    if (track === undefined) {
      return null;
    }
    return vehiclesdata.filter(function (vehicledata) {
      return (vehicledata.vin.toUpperCase() === (track.toUpperCase()));
    });
  }
}
