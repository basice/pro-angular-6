import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { EntityRepository } from './entity.repository';

@NgModule({
  providers: [EntityRepository, StaticDataSource]
})
export class ModelModule {
}
