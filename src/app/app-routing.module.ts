import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


const routes: Routes = [
  
  { path : '',component : HomeComponent},  
  { path : 'product',component : ProductComponent},  
  { path : 'product-detail',component : ProductDetailComponent},  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
