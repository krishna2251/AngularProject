import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogRO } from '../../../../softsimon-angular-2-dropdown-multiselect-5c6036b/demo/src/app/data';
import { CatalogServiceService } from '../services/catalog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.scss']
})
export class CatalogDetailsComponent implements OnInit {

  catalog:FormGroup;
  constructor( private service:CatalogServiceService,
    private route: Router) { }

  ngOnInit() {
    //this.addCatalog();
    this.catalog = new FormGroup({
      $key: new FormControl(null),
      catalogName:new FormControl('',Validators.required),
      catalogDesc:new FormControl('',Validators.required),
      catalogLevel:new FormControl('',Validators.required),
      parentCatalogId: new FormControl('',Validators.required),
      storeId:new FormControl('',Validators.required),
    });
  }
  initializeFormGroup(){
    this.catalog.setValue({
      $key:null,
      productName:'',
      productDesc:'',
      searchTag:'',
      manufacturerId:'',
      storeId:'',
    });
  }

  addCatalog(catalog){
    this.service.addCatalog(this.catalog.value).subscribe(res =>{
      console.log(res);
      this.route.navigate(['/catalog'])
      console.log(res.catalogName);
    })
  }

}
