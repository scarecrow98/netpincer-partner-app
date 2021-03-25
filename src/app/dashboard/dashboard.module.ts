import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { UrlSanitizer } from '../pipes/url-sanitizer';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidemenuComponent,
    ProductsComponent,
    ProductEditorComponent,
    UrlSanitizer,
    OrdersComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
