import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBitem, IBreakCrumb } from '@models/breadcrum.model';
import { CartDataService } from '@models/cart.model';
import { ProductModel } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { QUANTITY_SELECT } from '@share/_constant/constant';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: ProductModel[] = [];
  quantityList: Number[] = QUANTITY_SELECT;
  constructor(private service: StoreService,
    private cartDataSerice: CartDataService,
    private router: Router) { }

  ngOnInit() {
    this._getProduct();
  }
  /**
    * @description Get information of all products from Service
  */
  private _getProduct() {
    this.service.getData().subscribe((res) => {
      this.productList = res as ProductModel[];
      this.productList.forEach(item => {
        item.quantity = 1;
      })
    });
  }
  /**
  * @description Add product to cart. Set Data to cartService and return msg 'Added to cart'
  * @param {ProductModel} item - product information
  */
  public addToCart(item: ProductModel) {
    let carData = JSON.parse(JSON.stringify(this.cartDataSerice.cartData.value)) as ProductModel[];
    let itemExist = carData.find(x => x.id == item.id);
    if (!itemExist) {
      carData.push(item);
      this.cartDataSerice.setCartData(carData);
    } else {
      carData.forEach(data => {
        if (data.id == item.id) {
          data.quantity += item.quantity;
        }
      })
      this.cartDataSerice.setCartData(carData);
    }
    window.alert("Added to cart")
  }
  /**
  * @description Router to product detail.
  * @param {number} id - id of Product
  */
  routerDetail(id: number) {
    this.router.navigate(['product/' + id]);
  }
}
