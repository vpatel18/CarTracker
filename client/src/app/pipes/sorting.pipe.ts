import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

 transform(vehiclesdata: any): any {
  return vehiclesdata.filter(function (vehicledata) {
    const date1 = vehicledata.timestamp;
    const date2 = new Date();
    if (date2.getTime() - date1 <= 7200000) {
      return vehicledata;
    } else {
      return null;
    }
  });
}
}
