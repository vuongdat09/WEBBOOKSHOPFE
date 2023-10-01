import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products:any =[]
  constructor(private productService:ProductServiceService){
    this.loadProducts()
  }
  loadProducts(){
    this.productService.getAll().subscribe({
      next:(data)=>this.products = data,
      error:(err)=>console.log(err)
    })
  }
  handleDelete(id:number){
    this.productService.deleteProduct(id).subscribe({
      next:(data)=>{
        this.loadProducts()
        alert("delete product successfully")
      },
      error : (err)=>console.log(err)

    })
  }
}
