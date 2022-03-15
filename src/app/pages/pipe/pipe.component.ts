import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Order {
  orderDate: Date;
  totalPrice: number;
  firstName: string;
  lastName: string;
  curreny: string;
  currecyType: string | number;
}

// built-in pipes number,date,async,uppercase,lowercase

@Component({
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  providers: [CurrencyPipe],
})
export class PipeComponent implements OnInit {
  order: Order = {
    orderDate: new Date(),
    totalPrice: 10324.23432,
    firstName: 'Razor',
    lastName: 'Muhammed',
    curreny: 'Dolar',
    currecyType: '',
  };

  // Not: Pipe bir servis gibi çalışacak ise componente provider ekleyerek componente pipe tanıtırız.

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    // this.order.currecyType = this.currencyPipe.transform('Dolar') as
    //   | string
    //   | number;
  }
}
