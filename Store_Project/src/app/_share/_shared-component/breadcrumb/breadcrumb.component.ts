
import { Component, Input, OnInit } from '@angular/core';
import { IBreakCrumb } from '@models/breadcrum.model';


@Component({
    selector: 'app-breadcrumb-template',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Input() dataItem: IBreakCrumb;

    constructor() {
    }

    ngOnInit() {
        this.dataItem = this.dataItem;
    }

}
