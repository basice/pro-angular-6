import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { Entity } from './entity.model';

@Injectable()
export class EntityRepository {

  private data: Entity[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getData().subscribe(data => {
      this.data = data;
    });
  }

  getData(): Entity[] {
    return this.data;
  }

  getEntity(key: string): Entity {
    return this.data.find(e => e.key === key);
  }

}
