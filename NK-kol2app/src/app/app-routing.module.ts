import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersNKComponent} from "./orders-nk/orders-nk.component";
import {OrdersDetailsNKComponent} from "./orders-details-nk/orders-details-nk.component";

const routes : Routes = [
  {
    path: '',
    component: OrdersNKComponent
  },
  {
    path: ':id',
    component: OrdersDetailsNKComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
