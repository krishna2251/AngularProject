import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-sku-list/product-list.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CatalogSelectorComponent } from './catalog-selector/catalog-selector.component';
import { EditSkuComponent } from './edit-sku/edit-sku.component';
import { SkuDetailsComponent } from './sku-details/sku-details.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
//import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { ProductSkuImageUploadComponent } from './product-sku-image-upload/product-sku-image-upload.component';


const routes: Routes = [
  { path: '', component: HomeProductComponent },
  { path: 'home', component: HomeProductComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'product', component: ListProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'catalog', component: CatalogSelectorComponent },
  { path: 'catalogdetails', component: CatalogDetailsComponent },
  { path: 'edit', component: EditProductComponent },
  { path: 'skudetails', component: ProductListComponent },
  { path: 'addsku', component: SkuDetailsComponent },
  { path: 'editsku', component: EditSkuComponent },
  { path: 'drop', component: DropdownsComponent },
 { path: 'image', component: FormUploadComponent },
  { path: 'img', component: ProductSkuImageUploadComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
