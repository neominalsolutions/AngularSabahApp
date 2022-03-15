import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // observable bir nesne olduğu için genelede angularda observable tanımlamış değerlerin sonuna $ ifadesi koyarız.
  products$: Observable<Product[]> | undefined;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    console.log('products$', this.products$);

    this.products$.subscribe((response) => {
      this.products = [...response];

      console.log('products', this.products);
    });
  }
}
