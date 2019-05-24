import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersNKComponent } from './orders-nk/orders-nk.component';
import { OrdersItemNKComponent } from './orders-item-nk/orders-item-nk.component';
import { OrdersDetailsNKComponent } from './orders-details-nk/orders-details-nk.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrdersNKComponent,
    OrdersItemNKComponent,
    OrdersDetailsNKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
