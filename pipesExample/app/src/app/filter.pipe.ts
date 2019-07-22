import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
}) // 1.)impure-pipe works for every change in the component  2.)pure-pipe works only when the component is loaded.

export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, statusProperty: string): any {
    if (value.length === 0 || filterString === '') {
        // filterString === '' means it will show all servers array cuh filterString is empty originally
      // console.log(value); // this contains the array of servers
      // console.log(status); // this displays 'status' in the console.
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      if (item[statusProperty] === filterString) { // if server['s status] === 'whatever typed in input'
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
