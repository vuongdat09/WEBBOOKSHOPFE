import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { NavComponent } from './shared/layout-admin/nav/nav.component';
import { DasboarComponent } from './components/admin/dasboar/dasboar.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LayoutWebsiteComponent } from './shared/layout-website/layout-website.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: LayoutWebsiteComponent,children:[
    {path: '', component: HomePageComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]},
  {path :'admin', component:NavComponent,children:[
    {path: '', component:DasboarComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'addProducts', component: CreateProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
