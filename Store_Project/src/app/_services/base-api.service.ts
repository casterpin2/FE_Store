import { timeout } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  constructor(private http: HttpClient) { }
  get<T>(): Observable<T> {
    return this.http.get<T>("./assets/data.json");
  }
}
