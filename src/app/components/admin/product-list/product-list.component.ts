import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  constructor(
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (result:any) => {
        this.products = result.data;
        console.log(this.products);
      },
      (error) => console.log(error.message)
    );
  }
  removeProducts(id:any) {
    this.productService.removeProducts(id).subscribe(
      () => {
        this.products = this.products.filter((item:any)=>{item._id !== id});
      },
      (error) => console.log(error.message)
    );
  }

}
