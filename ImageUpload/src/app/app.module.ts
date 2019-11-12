import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkuComponent } from './sku/sku.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponent,
    ImageuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
