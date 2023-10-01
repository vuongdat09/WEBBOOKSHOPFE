import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products:IProduct[]=[]
  constructor(private productService : ProductServiceService){    
    this.productService.getProductHome().subscribe({
      next:(data)=>{
        this.products = data.allProduct?.docs || []
        console.log(data)
       
       
      },
      error:(err)=>console.log(err)
    })
  }
}
