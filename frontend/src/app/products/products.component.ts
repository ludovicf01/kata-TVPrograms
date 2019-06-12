import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Produit } from '../models/produit.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produitForm: FormGroup;
  produits: Produit[];

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onProducts();
    this.initForm();
  }

  initForm() {
      this.produitForm = this.formBuilder.group({
        titre: '',
        resum: '',
        fileName: '',
        time: ''
      })
  }

  onProducts(){
    this.productsService.getProduct().subscribe(datas => this.produits = datas);
    console.log('init', this.produits);
  }

  async onSubmitForm() {
    const formValue = this.produitForm.value;
    
    const newProduit = new Produit(
      ++this.produits.length,
      formValue['titre'],
      formValue['resum'],
      formValue['fileName'],
      +formValue['time']
    );
    await this.produits.push(newProduit);
    console.log('form', this.produits);
    await this.productsService.saveProduitsToServer(newProduit).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
