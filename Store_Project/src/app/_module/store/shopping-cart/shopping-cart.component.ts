import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartDataService } from '@models/cart.mode';
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
  form: FormGroup;
  total: number = 0;
  isVisible : boolean = false;
  constructor(
    private cartDataService: CartDataService,
    private service: StoreService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this._createForm();
    this._getProduct();
  }
  private _createForm() {
    this.form = this.fb.group({
      name: this.fb.control("", [Validators.required,Validators.minLength(3)]),
      address: this.fb.control("", [Validators.required,Validators.minLength(6)]),
      creditcard: this.fb.control("", [Validators.required,Validators.maxLength(16)])
    })
  }
  private _getProduct() {
    this.productList = this.cartDataService.cartData.value;
    this._total();
  }
  private _total() {
    this.total = 0;
    this.productList.forEach(item => {
      this.total += item.price * item.quantity;
    })
  }
  step(event: any, item: ProductModel) {
    if (event < 1) {
      window.alert("Removed from cart");
      this.productList = this.productList.filter(x => x.id != item.id);
    }
    this._total();
    this.cartDataService.setCartData(this.productList);

  }
  public submit() {
    if (!this.form.valid) {
      FormHelper.markDirty(this.form);
      return;
    }
  }

}
