import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {from, Observable} from 'rxjs';
import {Order} from './order.model';

@Injectable()
export class StaticDataSource {
  private data: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
    new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
    new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),
    new Product(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
    new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100),
    new Product(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
    new Product(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100),
    new Product(9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100),
    new Product(10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100),
    new Product(11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 100),
    new Product(12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 100),
    new Product(13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 100),
    new Product(14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 100),
    new Product(15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 100),
  ];

  // private locator = (p: Product, id: number) => p.id == id;

  getProducts(): Observable<Product[]> {
    return from([this.data]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }

  saveProduct(product: Product): Observable<Product> {
    product.id = ++this.data.length;
    console.log(JSON.stringify(product));
    return from([product]);
  }

  updateProduct(product): Observable<Product> {
    console.log(JSON.stringify(product));
    return from([product]);
  }

  deleteProduct(id: number): Observable<Product> {
    // const product = this.data.find(p => this.locator(p, id));
    const product = this.data.find(p => p.id == id);
    console.log(JSON.stringify(product));
    return from([product]);
  }

}
