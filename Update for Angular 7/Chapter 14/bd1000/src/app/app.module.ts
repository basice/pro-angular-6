import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TestComponent } from './dynamic-form/testcomponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class AppModule {
}
