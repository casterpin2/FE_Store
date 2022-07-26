import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '@models/product.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(data: ProductModel[]): any {
    let total = 0;
    data.forEach(item=>{
        total+= item.quantity*item.price;
    })
    return '$'+total.toLocaleString();
  }

}
