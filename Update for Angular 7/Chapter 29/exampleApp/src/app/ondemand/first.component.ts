import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {RestDataSource} from '../model/rest.datasource';

@Component({
  selector: 'first',
  templateUrl: 'first.component.html'
})
export class FirstComponent implements OnInit {
  _products: Product[] = [];
  highlighted = false;

  constructor(public datasource: RestDataSource) {
  }

  _category = 'Soccer';

  set category(newValue: string) {
    this.updateData();
  }

  ngOnInit() {
    this.updateData();
  }

  getProducts(): Product[] {
    return this._products;
  }

  updateData() {
    this.datasource.getData()
      .subscribe(data => this._products = data
        .filter(p => p.category === this._category));
  }
}
