import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
// 1.)impure-pipe works for every change in the component  2.)pure-pipe works only when the component is loaded.

export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
