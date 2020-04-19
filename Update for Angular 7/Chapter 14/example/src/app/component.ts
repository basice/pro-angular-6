import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from './repository.model';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    model: Model = new Model();
    form: ProductFormGroup = new ProductFormGroup();

    newProduct: Product = new Product();

    formSubmitted = false;

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    addProduct(p: Product) {
        console.log('New Product: ' + this.jsonProduct);
    }

    submitForm(form: NgForm) {
        this.form.productControls.forEach(c => this.newProduct[c.modelProperty] = c.value);
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
}
