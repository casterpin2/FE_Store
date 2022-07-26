import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { OrderFormComponent } from './order/order-form/order-form.component';

import { InitNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedPipesModule } from '@share/_shared-component/_pipes/shared-pipes.module';
import { StoreService } from '@services/store.service';
import { CartDataService } from '@models/cart.mode';


@NgModule({
  declarations: [
    ProductComponent,
    ShoppingCartComponent,
    OrderComponent,
    ProductDetailComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    InitNgZorroAntdModule,
    FormsModule,
    SharedPipesModule,
    ReactiveFormsModule
  ],
  providers: [StoreService,CartDataService]
})
export class StoreModule { }
