import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Entity } from './entity.model';

@Injectable()
export class StaticDataSource {
  private entities: Entity[] = [
    new Entity('sk_fast_tomt_sma', '10001.000000'),
    new Entity('sum_sk_skred', '10002.000000'),
    new Entity('sum_sk_skred_f', '10003.000000'),
    new Entity('sk_slut', '10004.000000'),
    new Entity('sk_fast', '10005.000000')
  ];

  getData(): Observable<Entity[]> {
    return from([this.entities]);
  }
}
