import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/layout-website/header/header.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { NavComponent } from './shared/layout-admin/nav/nav.component';
import { DasboarComponent } from './components/admin/dasboar/dasboar.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryCreateComponent } from './components/admin/category-create/category-create.component';

const routes: Routes = [
  {path: '', component: HeaderComponent,children:[
    {path: '', component: HomePageComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]},
  {path :'admin', component:NavComponent,children:[
    {path: '', component:DasboarComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'addProducts', component: CreateProductComponent},
    {path: 'products/:id', component: UpdateProductComponent},
    {path: 'category', component: CategoryListComponent},
    {path: 'category/add', component: CategoryCreateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
