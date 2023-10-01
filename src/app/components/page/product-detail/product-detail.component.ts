import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/products';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  valueInput : number = 1
  product!:IProduct
  priceInput : number = 0
  
  constructor(private router:ActivatedRoute,private productService :ShareDataService){
    this.router.params.subscribe(({id})=>{
      this.productService.getProductById(+id).subscribe({
        next:(data)=>{this.product = data,this.priceInput = data.price || 0}
      })
    })
  }

  addValueInput(){
    this.valueInput++
    if(this.product.price){
      this.priceInput = this.product.price * this.valueInput
    }
    
  }
  subtractValueInput(){
    this.valueInput--
    if(this.valueInput < 1){
      this.valueInput = 1
    }
    if(this.product.price){
      this.priceInput = this.product.price * this.valueInput
    }
  }

}
