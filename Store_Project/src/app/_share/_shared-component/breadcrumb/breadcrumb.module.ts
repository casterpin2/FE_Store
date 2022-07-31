import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { InitNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    InitNgZorroAntdModule
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class BreadcrumModule { }
