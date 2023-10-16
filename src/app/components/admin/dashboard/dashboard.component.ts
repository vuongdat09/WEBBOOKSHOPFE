import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Data, IProduct } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products:IProduct[] = []
  constructor(private productService:ProductServiceService){
    this.loadProducts()
  }
  async loadProducts(){

    const data: Data = await lastValueFrom(this.productService.getAll())
    this.products = data.allProduct?.docs || [];
    
    // this.productService.getAll().subscribe({
    //   next:(data: {
    //       message: string, 
    //       allProduct: { 
    //         docs: IProduct[]
    //       }
    //     })=>{
    //       this.products = data.allProduct?.docs || [] ;
    //       console.log(this.products)
    //     },
    //   error:(err)=>console.log(err)
    // })
  }
  handleDelete(id:number|undefined){
    if(id){
      this.productService.deleteProduct(id).subscribe({
        next:(data)=>{
          this.loadProducts()
          alert("delete product successfully")
        },
        error : (err)=>console.log(err)
  
      })
    }
   
  }
}
