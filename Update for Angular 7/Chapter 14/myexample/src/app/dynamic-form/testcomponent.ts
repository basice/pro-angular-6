import { Component } from '@angular/core';
import { product } from './testdata';

@Component({
    selector: 'app',
    template: `
        <div class="m-2">
            <app-dynamic-form [dataObject]="productObj"></app-dynamic-form>
        </div>
    `
  }
)
export class TestComponent {
  productObj;

  constructor() {
    this.productObj = product;
  }

}
