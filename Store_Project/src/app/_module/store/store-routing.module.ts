import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent,    
  },
  {
    path:'product/:id',
    component:ProductDetailComponent,    
  },
  {
    path:'order',
    component:OrderComponent,    
  },
  {
    path:'cart',
    component:ShoppingCartComponent,    
  },
  {
    path:'order-form',
    component:OrderFormComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
