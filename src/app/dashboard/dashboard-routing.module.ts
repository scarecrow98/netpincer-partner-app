import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'products', component: ProductsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
