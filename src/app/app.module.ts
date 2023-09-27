import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { AboutPageComponent } from './components/page/about-page/about-page.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import { DasboarComponent } from './components/admin/dasboar/dasboar.component';
import { NavComponent } from './shared/layout-admin/nav/nav.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LayoutWebsiteComponent } from './shared/layout-website/layout-website.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NextButtonDirective } from './directive/next-button.directive';
import { PrevButtonDirective } from './directive/prev-button.directive';
import { ChooseDotDirective } from './directive/choose-dot.directive';
import { EllipsisDirective } from './directive/ellipsis.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DasboarComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    LayoutWebsiteComponent,
    SidebarComponent,
    HomeComponent,
    ImageSliderComponent,
    HeaderComponent,
    FooterComponent,
    NextButtonDirective,
    PrevButtonDirective,
    ChooseDotDirective,
    EllipsisDirective,
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
