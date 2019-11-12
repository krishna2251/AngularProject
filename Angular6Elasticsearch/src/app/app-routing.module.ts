import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ShowCustomersComponent } from './customer/show-customers/show-customers.component';
import { SearchCustomersComponent } from './customer/search-customers/search-customers.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddCustomerComponent },
    { path: 'customers', component: ShowCustomersComponent },
    { path: 'search', component: SearchCustomersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
