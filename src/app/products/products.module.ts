import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { NgModule, Component } from '@angular/core';

var childRules = [
  { path: 'ProductList', component: ProductListComponent },

  { path: '', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild([]), RouterModule.forRoot([])],
  exports: [],
  declarations: [ProductListComponent],
  providers: []
})
export class ProductModule {}
