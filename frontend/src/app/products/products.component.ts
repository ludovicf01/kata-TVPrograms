import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produits: Produit[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.onProducts();
  }

  onProducts(){
    this.productsService.getProduct().subscribe(datas => this.produits = datas);
  }

}
