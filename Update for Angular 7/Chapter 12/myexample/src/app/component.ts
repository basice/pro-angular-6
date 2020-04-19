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
  fontSizeWithUnits = '30px';
  fontSizeWithoutUnits = '30';

  constructor(ref: ApplicationRef) {
    (window as any).appRef = ref;
    (window as any).model = this.model;
  }

  getClasses(key: number): string {
    const product = this.model.getProduct(key);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMapp(key: number) {
    const product = this.model.getProduct(key);
    return {
      'text-center bg-danger': product.name === 'Kayak',
      'bg-info': product.price < 50
    };
  }

  getStyles(key: number) {
    const product = this.model.getProduct(key);
    return {
      fontSize: '30px',
      'margin.px': 100,
      color: product.price > 50 ? 'red' : 'green'
    };
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    const product = this.getProductByPosition(position);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }
}
