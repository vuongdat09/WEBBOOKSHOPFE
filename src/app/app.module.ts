import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout-website/header/header.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { AboutPageComponent } from './components/page/about-page/about-page.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { DasboarComponent } from './components/admin/dasboar/dasboar.component';
import { NavComponent } from './shared/layout-admin/nav/nav.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DasboarComponent,
    NavComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterLink 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
