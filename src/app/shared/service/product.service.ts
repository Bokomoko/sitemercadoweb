import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../model/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // using vercel nextjs api
  apiUri = "https://prod-store-next.vercel.app/api"
  // using local server
  // apiUri = "http://localhost:3000/api"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  }
  constructor(private httpClient: HttpClient) {

  }
  public getProducts(): Observable<ProductList> {
    return this.httpClient.get<ProductList>(this.apiUri + "/prodtlist"

    )
  }
}
