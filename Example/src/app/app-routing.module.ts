import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

const routes: Routes = [
  { path: 'dropdown', component: DropdownsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
