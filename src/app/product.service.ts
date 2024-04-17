import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// creamos nuestro url base para obtener la consulta del back
  private urlBase="http://localhost:8080/inventory-app/products"
// declaramos en el constructor la peticion del cliente y creamos metodo de obtencion de la lista 
  constructor(private clientHttp: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.clientHttp.get<Product[]>(this.urlBase);
  }

  addProduct(product: Product) : Observable<Object>{
    return this.clientHttp.post(this.urlBase,product);
  }
  getProductById(id:number){
    return this.clientHttp.get<Product>(`${this.urlBase}/${id}`);
  }
  updateProduct(id:number, product:Product): Observable<Object>{
    return this.clientHttp.put(`${this.urlBase}/${id}`,product)
  }

  removeProduct(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`)
  }
}
