import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LimitValidator } from '../limit.formvalidator';
import { Product } from '../product.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styles: [`
      .error {
          color: red;
      }

      input.ng-dirty.ng-invalid {
          border: 2px solid #ff0000
      }

      input.ng-dirty.ng-valid {
          border: 2px solid #6bc502
      }
  `]
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject;
  form: FormGroup;
  /*
     [
       {
          key: "name",
          label: "Name",
          value: "Juri"
          type: "text",
          options: []
          validation: {required: true},
        },
      ...
      ]
  */
  objectProps;

  newProduct: Product = new Product();
  formSubmitted = false;

  constructor() {
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps =
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.dataObject[prop]);
        });

    // setup the form
    const formGroup = {};
    for (const prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    }

    this.form = new FormGroup(formGroup);
  }

  onSubmit(form) {
    console.log(form);
    this.formSubmitted = true;

    if (this.form.valid) {
      this.newProduct = Object.assign(this.newProduct, this.form.value);
      this.addProduct(this.newProduct);

      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }

  addProduct(p: Product) {
    console.log(`New Product: ${ this.jsonProduct }`);
  }

  getFormValidationMessages(): string[] {
    const messages: string[] = [];
    this.objectProps.forEach(prop => this.getValidationMessages(prop)
      .forEach(m => messages.push(m)));
    return messages;
  }

  getValidationMessages(prop: Prop) {
    const messages: string[] = [];
    const errors = this.form.get(prop.key).errors;
    if (errors) {
      // tslint:disable-next-line:forin
      for (const errorName in errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${ prop.label }`);
            break;
          case 'minlength':
            messages.push(`A ${ prop.label } must be at least ${ errors.minlength.requiredLength } characters`);
            break;
          case 'maxlength':
            messages.push(`A ${ prop.label } must be no more than ${ errors.maxlength.requiredLength } characters`);
            break;
          case 'limit':
            messages.push(`A ${ prop.label } cannot be more than ${ errors.limit.limit }`);
            break;
          case 'pattern':
            messages.push(`The ${ prop.label } contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        } else if (validation === 'max') {
          formValidators.push(Validators.max(validators[validation]));
        } else if (validation === 'minLength') {
          formValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === 'maxLength') {
          formValidators.push(Validators.maxLength(validators[validation]));
        } else if (validation === 'pattern') {
          formValidators.push(Validators.pattern(validators[validation]));
        } else if (validation === 'Limit') {
          formValidators.push(LimitValidator.Limit(validators[validation]));
        }
      }
    }

    return formValidators;
  }

}

export interface Prop {
  key: string;
  label: string;
  value: string;
  type: string;
  options: [];
  validation: {};
}


