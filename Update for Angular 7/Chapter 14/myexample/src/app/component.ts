/* tslint:disable:forin */
import { Model } from './repository.model';
import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
  }
)
export class ProductComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted = false;

  get jsonProdcut() {
    return JSON.stringify(this.newProduct);
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    console.log(`New Product: ${ this.jsonProdcut }`);
  }

  submitForm(form: ProductFormGroup) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

}
