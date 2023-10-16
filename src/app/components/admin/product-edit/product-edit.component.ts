import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  productForm = this.form.group({
    name : [''],
    price : [0],
    author : [''],
    sale :[0],
    img : [''],
    desc : [''],
  })
   product: any = {
    _id: 1,
    name: 'Product Name',
    price: 29.99,
    author: 'Author Name',
    sale: 10,
    img: 'product.jpg',
    desc: 'Product description',
  };
    constructor(private productService: ProductServiceService,private routerNavigate: Router,private router : ActivatedRoute,private form : FormBuilder){}

    async ngOnInit(){
      const {id} = this.router.snapshot.params
      if(id){
        try {
          this.product = await firstValueFrom(this.productService.getProductById(id))
          const {product} = this.product
          this.productForm.patchValue(product as IProduct)

          
        } catch (error) {
          console.log(error)
        }
      }
    }
    

    async onHandleSubmit(){
      if(this.productForm.invalid)return  
      const {product = 0} = this.product    
        const productEdit:IProduct = {
          _id : product._id,...this.productForm.value
        }
        
        this.productService.editProduct(productEdit).subscribe({
          next: ()=>{
            alert("Update product successfully")
            this.routerNavigate.navigate(['/admin']);
          }
        })
        
      
     
    }
}
