import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartDataService } from '@models/cart.model';
import { OrderModel } from '@models/order.model';
import { ProductModel } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { FormHelper } from '@share/_helper/form-helper';
import { min } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productList: ProductModel[] = [];

  total: number = 0;
  isSubmit: boolean = false;
  orderData: OrderModel;
  constructor(
    private cartDataService: CartDataService,
  ) { }

  ngOnInit(): void {
    this.orderData = new OrderModel();
    this._getProduct();
  }
  /**
  * @description get the products that have been added to the cart service
  */
  private _getProduct() {
    this.productList = this.cartDataService.cartData.value;
    this._total();
  }
  /**
 * @description calculate the total price of products in cart.
 */
  private _total() {
    this.total = 0;
    this.productList.forEach(item => {
      this.total += item.price * item.quantity;
    })
    this.orderData.total = this.total;
  }
  /**
  * @description increase or decrease the quantity of the product. If the product is less than 1, the message will be displayed.
  * @param {Event} event - data retrieved from click event
  * @param {ProductModel} item - information of product from click event
  */
  step(event: any, item: ProductModel) {
    if (event < 1) {
      window.alert("Removed from cart");
      this.productList = this.productList.filter(x => x.id != item.id);
    } else {
      this._total();
      this.cartDataService.setCartData(this.productList);
    }


  }
  /**
 * @description get data from emit event
 * @param {string} name - data from emit event
 */
  getFullName(name: string) {
    this.orderData.fullName = name;
    this.isSubmit = true;
    this.cartDataService.setCartData([]);
  }
   /**
  * @description remove product from cart and calculate the total price of products in cart.
  * @param {ProductModel} item - information of product from click event
  */
  removeProduct(item: ProductModel){
    window.alert("Removed from cart");
    this.productList = this.productList.filter(x => x.id != item.id);
    this._total();
    this.cartDataService.setCartData(this.productList);
  }
}
