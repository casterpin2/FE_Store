import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDataService } from '@models/cart.mode';
import { ProductModel } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { QUANTITY_SELECT } from '@share/_constant/constant';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  item:ProductModel;
  quantityList : Number[] = QUANTITY_SELECT;
  constructor(  private activatedRoute: ActivatedRoute, private cartDataSerice:CartDataService,private service: StoreService,) { }

  ngOnInit() {
    this._getProduct();
  }
  private _getProduct(){
    const idGetParams = this.activatedRoute.snapshot.params['id'];
    this.service.getData().subscribe((res)=>{
      let productList = res as ProductModel[];
      this.item = productList.find(x=>x.id == idGetParams);
      this.item.quantity = 1;
    });
  }
  public addToCart(item:ProductModel){
    let carData = JSON.parse(JSON.stringify(this.cartDataSerice.cartData.value)) as ProductModel[];
    let itemExist = carData.find(x=>x.id == item.id);
    if(!itemExist){
      carData.push(item);
      this.cartDataSerice.setCartData(carData);
    }else{

      carData.forEach( data=>{
        if(data.id == item.id){
          data.quantity += item.quantity;
        }
      })
      this.cartDataSerice.setCartData(carData);
    }
    window.alert("Added to cart")
  }
}
