import { Component , OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(
    private productService: ProductsService,
    private router: Router
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
        console.log("xóa thành công: ", this.products);
        this.products = this.products.filter((item:any)=>{item._id !== id});
        this.router.navigate(["/admin/products"])
      },
      (error) => console.log(error.message)
    );
  }

}
