import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }
    model: Model = new Model();

    targetName = 'Kayak';
    counter = 1;

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        console.log('getProductCount invoked');
        return this.getProducts().length;
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    getProductPrice(index: number): number {
        return Math.floor(this.getProduct(index).price);
    }
}
