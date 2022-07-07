import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsEndpoint = 'http://localhost:8097/products';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public listAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsEndpoint);
  }
}
