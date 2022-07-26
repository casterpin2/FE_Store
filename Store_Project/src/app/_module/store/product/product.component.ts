import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '@models/cart.mode';
import { ProductModel } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { QUANTITY_SELECT } from '@share/_constant/constant';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList : ProductModel[] =[];
  quantityList : Number[] = QUANTITY_SELECT;
  constructor(private service: StoreService,
    private cartDataSerice:CartDataService,
    private router: Router) { }

  ngOnInit(): void {
    this._getProduct();
  }

  private _getProduct(){
    this.service.getData().subscribe((res)=>{
      this.productList = res as ProductModel[];
      this.productList.forEach(item=>{
        item.quantity = 1;
      })
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
  routerDetail(id:number){
    this.router.navigate(['product/'+ id]);    
  }
}
