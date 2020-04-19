import { Model } from './repository.model';
import { ApplicationRef, Component } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
  }
)
export class ProductComponent {
  model: Model = new Model();
  targetName = 'Kayak';
  counter = 1;

  constructor(ref: ApplicationRef) {
    (window as any).appRef = ref;
    (window as any).model = this.model;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    const product = this.getProductByPosition(position);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    console.log('getProductCount invoked');
    return this.model.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }
}
