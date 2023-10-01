import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { AboutPageComponent } from './components/page/about-page/about-page.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LayoutWebsiteComponent } from './shared/layout-website/layout-website.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NextButtonDirective } from './directive/next-button.directive';
import { PrevButtonDirective } from './directive/prev-button.directive';
import { ChooseDotDirective } from './directive/choose-dot.directive';
import { EllipsisDirective } from './directive/ellipsis.directive';
import { ProductDetailComponent } from './components/page/product-detail/product-detail.component';
import { LayoutAdminComponent } from './shared/layout-admin/layout-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarAdminComponent } from './components/admin/sidebar-admin/sidebar-admin.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { ProductPageComponent } from './components/page/product-page/product-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,    
    SigninComponent,
    SignupComponent,
    LayoutWebsiteComponent,
    SidebarComponent,    
    ImageSliderComponent,
    HeaderComponent,
    FooterComponent,
    NextButtonDirective,
    PrevButtonDirective,
    ChooseDotDirective,
    EllipsisDirective,
    ProductDetailComponent,
    LayoutAdminComponent,
    DashboardComponent,
    SidebarAdminComponent,
    AddProductComponent,
    ProductEditComponent,
    ProductPageComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterLink ,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
