import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { FormBuilder,Validators  } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/models/products';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private form :FormBuilder,private productService : ProductServiceService,){

  }
  productForm = this.form.group({
    name : [''],
    price : [0],
    author : [''],
    sale :[0],
    img : [''],
    desc : [''],
  })
 
  async onHandleSubmit(){
    if(this.productForm.invalid)return    
    await firstValueFrom(this.productService.addProduct(this.productForm.value as IProduct))
    alert("Create product successfully")
  }
}
