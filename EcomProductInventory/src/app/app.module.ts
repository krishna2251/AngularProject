import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatTabsModule} from '@angular/material/tabs'; 
import { MatTableModule, MatGridListModule } from '@angular/material'
import {MatTabsModule} from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CatalogSelectorComponent } from './catalog-selector/catalog-selector.component';
import { ProductListComponent } from './product-sku-list/product-list.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';
//import { Component } from '@angular/core';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AngularmaterialModule } from './AngularMaterial';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EditSkuComponent } from './edit-sku/edit-sku.component';
import { SkuDetailsComponent } from './sku-details/sku-details.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { ProductSkuImageUploadComponent } from './product-sku-image-upload/product-sku-image-upload.component';
import { CommonServiceService } from './services/common-service.service';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    CatalogSelectorComponent,
    ProductListComponent,
    DropdownsComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    EditProductComponent,
    HomeProductComponent,
    CarouselComponent,
    EditSkuComponent,
    SkuDetailsComponent,
    CatalogDetailsComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    ProductSkuImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    DropDownsModule,
    DateInputsModule,
    MatRippleModule,
    MatTableModule,
    AngularmaterialModule,
    MatGridListModule,
    //NgbModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [CommonServiceService],
  bootstrap: [AppComponent],
  entryComponents : [ProductDetailsComponent]
})
export class AppModule { }
