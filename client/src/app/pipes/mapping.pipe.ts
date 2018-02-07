import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapping'
})
export class MappingPipe implements PipeTransform {

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
      const date1 = vehicledata.timestamp;
      const date2 = new Date();
      if (date2.getTime() - date1 <= 1800000 && vehicledata.vin === track) {
        return vehicledata;
      }

    });
  }
}
