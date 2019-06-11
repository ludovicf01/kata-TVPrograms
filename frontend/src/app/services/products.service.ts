import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/produits';
  // configUrl = 'assets/produits.json'

  getProduct(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.configUrl);
  }
}
