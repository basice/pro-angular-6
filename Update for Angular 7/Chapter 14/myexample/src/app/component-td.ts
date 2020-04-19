/* tslint:disable:forin */
import { Model } from './repository.model';
import { Component } from '@angular/core';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';

@Component({
    selector: 'app-td',
    templateUrl: 'template-td.html'
  }
)
export class ProductComponentTD {
  model: Model = new Model();
  selectedProduct: string;
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

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

  addProduct(p: Product) {
    console.log(`New Product: ${ this.jsonProdcut }`);
  }

  getValidationMessages(state: any, thingName?: string) {
    const thing: string = state.path || thingName;
    const messages: string[] = [];
    if (state.errors) {
      for (const errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${ thing }`);
            break;
          case 'minlength':
            messages.push(`A ${ thing } must be at least ${ state.errors.minlength.requiredLength } characters`);
            break;
          case 'pattern':
            messages.push(`The ${ thing } contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }

  getFormValidationMessages(form: NgForm): string[] {
    const messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k)
        .forEach(m => messages.push(m));
    });
    return messages;
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
