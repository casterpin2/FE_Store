import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUsd'
})
export class CurrencyUsdPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return '$'+value.toLocaleString();
  }

}
