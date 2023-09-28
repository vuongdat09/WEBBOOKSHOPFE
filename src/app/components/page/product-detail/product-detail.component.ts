import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  valueInput : number = 1

  addValueInput(){
    this.valueInput++
    
  }
  subtractValueInput(){
    this.valueInput--
    if(this.valueInput < 1){
      this.valueInput = 1
    }
  }
}
