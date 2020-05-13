import { Component } from '@angular/core';
import { entity } from './testdata';

@Component({
    selector: 'app-root',
    template: `
        <div class="m-2">
            <app-dynamic-form [dataObject]="entityObj"></app-dynamic-form>
        </div>
    `
  }
)
export class TestComponent {
  entityObj;

  constructor() {
    this.entityObj = entity;
  }

}
