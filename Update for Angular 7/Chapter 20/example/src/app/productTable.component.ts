import { Component, Input } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { DiscountService } from './discount.service';
import { LogService } from './log.service';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  providers: [LogService]
})
export class ProductTableComponent {

  constructor(private dataModel: Model) { }

  dateObject: Date = new Date(2020, 1, 20);
  dateString = '2020-02-20T00:00:00.000Z';
  dateNumber = 1582156800000;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }
}
