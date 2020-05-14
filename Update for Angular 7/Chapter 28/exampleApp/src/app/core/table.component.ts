import { Component, Inject } from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { ActivatedRoute } from '@angular/router';
import { HighlightTrigger } from './table.animations';

@Component({
    selector: 'paTable',
    templateUrl: 'table.component.html',
    animations: [HighlightTrigger]
})
export class TableComponent {

    constructor(private model: Model, activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe(params => {
            this.category = params['category'] || null;
        });
    }

    get categories(): string[] {
        return this.model.getProducts()
            .map(p => p.category)
            .filter((category, index, array) => array.indexOf(category) == index);
    }
    category: string = null;

    highlightCategory = '';

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts()
            .filter(p => this.category == null || p.category == this.category);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    getRowState(category: string): string {
        return this.highlightCategory == '' ? '' :
            this.highlightCategory == category ? 'selected' : 'notselected';
    }
}
