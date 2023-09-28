import { CategoryService } from './../../../services/category.service';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  products: FormGroup;
  categories: any[] = [];

  constructor( private categoryService:CategoryService,private productsService: ProductsService , private router:Router , private formBuilder: FormBuilder) {
    this.products = this.formBuilder.group({
      name :[''],
      image :[''],
      price :[''],
      desc :[''],
      quantity :[''],
      categoryId :[''],
    })
  }

  getCategory(){
    this.categoryService.getAllCategory().subscribe((data:any)=>{
        this.categories = data
        console.log(data);
    })
  }  

  postProduct(){
    this.productsService.postProducts(this.products).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/admin/products']);
      }
    )
  }
}
