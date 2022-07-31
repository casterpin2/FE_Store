import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { InitNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    InitNgZorroAntdModule,
  ]
})
export class PageNotFoundModule { }
