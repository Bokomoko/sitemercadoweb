import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/shared/model/product-list.model';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listOfProducts: ProductList;

  constructor(
    public prodService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.prodService.getProducts().subscribe(response => {
      this.listOfProducts = response
    }
    )
  }

}
