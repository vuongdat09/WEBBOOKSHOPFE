import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products:any=[]
  constructor(private productService : ProductServiceService){    
    this.productService.getAll().subscribe({
      next:(data)=>{
        this.products = data.allProduct?.docs || []
      },
      error:(err)=>console.log(err)
    })
  }
}
