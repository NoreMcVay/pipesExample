import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
  }

  // line 9 - return the value then split it with an empty character to get an array...
  // then reverse it...then join it together with an empty character...
  // this will simply reverse a string.

}
