import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = 'Listado de productos';
  products: Product[] = [];
  currentPage: number = 1;

  constructor(private service: ProductService) { }

  ngOnInit() {

    this.service.listAllProducts().subscribe(products => this.products = products)
    
  }

}
