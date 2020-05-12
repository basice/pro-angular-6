import { Component } from '@angular/core';
import { EntityRepository } from '../model/entity.repository';
import { Entity } from '../model/entity.model';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {

  constructor(private repository: EntityRepository) {
  }

  get entities(): Entity[] {
    return this.repository.getData();
  }

}
