import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyUsdPipe } from './currency_usd.pipe';
import { TotalPipe } from './total.pipe';




@NgModule({
  declarations: [		
    CurrencyUsdPipe,
    TotalPipe
   ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyUsdPipe,
    TotalPipe
  ]
})
export class SharedPipesModule { }
