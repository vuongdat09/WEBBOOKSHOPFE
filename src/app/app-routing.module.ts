import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LayoutWebsiteComponent } from './shared/layout-website/layout-website.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { ProductDetailComponent } from './components/page/product-detail/product-detail.component';
import { LayoutAdminComponent } from './shared/layout-admin/layout-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { ProductPageComponent } from './components/page/product-page/product-page.component';


const routes: Routes = [
  {path: '', component: LayoutWebsiteComponent,children:[
    {path: '', component: HomePageComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'product', component: ProductPageComponent},
  ]},
  {
    path:'admin',component : LayoutAdminComponent,children:[
      { path:'',redirectTo: "product", pathMatch: "full"},
      { path:'product',component : DashboardComponent},
      { path:'product/create',component : AddProductComponent},
      { path:'product/:id/edit',component : ProductEditComponent},
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
