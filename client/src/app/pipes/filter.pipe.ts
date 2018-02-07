import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(vehiclesdata: any, term: any): any {

    if (!vehiclesdata) {
      return [];
    }

    if (term === '') {
      return vehiclesdata;
    }

    if (term === undefined) {
      return vehiclesdata;
    }

    return vehiclesdata.filter(function (vehicledata) {
      return (vehicledata.priority.toUpperCase() === (term.toUpperCase()));

    } );

  }
}
