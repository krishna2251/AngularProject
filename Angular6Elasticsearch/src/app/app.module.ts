import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { ShowCustomersComponent } from './customer/show-customers/show-customers.component';
import { SearchCustomersComponent } from './customer/search-customers/search-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    ShowCustomersComponent,
    SearchCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
