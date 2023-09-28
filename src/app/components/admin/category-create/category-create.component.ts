import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {
  category : any ={
    name:''
  }

  constructor(private categoryService : CategoryService , private router:Router){}

  postCategory(){
    this.categoryService.postCategory(this.category).subscribe((data:any) =>{
      console.log(data);
      this.router.navigate(['/admin/category'])
    })
  }
}
