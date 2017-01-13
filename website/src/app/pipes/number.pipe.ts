import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'shorten'})
export class ShortenNumberPipe implements PipeTransform {
  transform(value: any, digits: number = 1):string {
    var units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
        decimal;

    for(var i=units.length-1; i>=0; i--) {
        decimal = Math.pow(1000, i+1);

        if(value <= -decimal || value >= decimal) {
            return +(value / decimal).toFixed(digits) + units[i];
        }
    }

    return value;
  }
}
