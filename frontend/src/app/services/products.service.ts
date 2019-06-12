import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  produits: Produit[]; 

  constructor(private httpClient: HttpClient) { }

  configUrl = 'http://localhost:3000/produits';
  // configUrl = 'assets/produits.json'

  getProduct(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.configUrl);
  }

  saveProduitsToServer(produit) {
    return this.httpClient
      .put('http://localhost:3000/produits', produit);
  }
}
