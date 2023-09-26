import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { NextButtonDirective } from './next-button.directive';
import { PrevButtonDirective } from './prev-button.directive';
import { SharedDataServiceService } from './services/shared-data-service.service';

@NgModule({
  declarations: [
    AppComponent,        
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    FooterComponent,
    ImageSliderComponent,
    NextButtonDirective,
    PrevButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
