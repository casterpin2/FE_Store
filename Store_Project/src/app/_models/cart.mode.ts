import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ProductModel } from "./product.model";

@Injectable()
export class CartDataService {
    public cartData = new BehaviorSubject([]);
    public getCartData = this.cartData.asObservable();
    public setCartData(data: ProductModel[]) {
        this.cartData.next(data);
    }
}
