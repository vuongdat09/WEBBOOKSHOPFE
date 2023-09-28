import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: any[] =[];
  constructor(private categoryService:CategoryService){}

  ngOnInit(){
    this.getCategory()
  }
  getCategory(){
    this.categoryService.getAllCategory().subscribe(
      (data:any)=>{
        this.categories = data.category
        console.log(data);
      }
    )
  }
}
