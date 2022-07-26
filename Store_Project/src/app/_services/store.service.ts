import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";

@Injectable()

export class StoreService {
    constructor(
        private baseApiService: BaseApiService
    ) {
    }
    getData() {
        return this.baseApiService.get();
    }
}