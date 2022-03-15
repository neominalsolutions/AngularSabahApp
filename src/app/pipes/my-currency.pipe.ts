import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency',
})
export class MyCurrencyPipe implements PipeTransform {
  //c# daki params aynısı buradaki rest operatör ...
  transform(value: string, ...args: string[]): unknown {
    switch (value) {
      case 'Euro':
        value = '€';
        break;
      case 'TL':
        value = '₺';
        break;
      case 'Dolar':
        value = '$';
        break;
      default:
        break;
    }

    return value;
  }
}
