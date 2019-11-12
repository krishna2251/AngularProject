import { Component, OnInit, Input } from '@angular/core';
import { CatalogRO, ProductCatalogDir,Product } from '../data';
import { ProductDataService } from '../product-data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { CatalogServiceService } from '../services/catalog-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CatalogDetailsComponent } from '../catalog-details/catalog-details.component';
//import { CatalogRO } from '../../../../softsimon-angular-2-dropdown-multiselect-5c6036b/demo/src/app/data';
//import { Product } from '../../../../Example/src/app/model';


@Component({
  selector: 'app-catalog-selector',
  templateUrl: './catalog-selector.component.html',
  styleUrls: ['./catalog-selector.component.scss']
})
export class CatalogSelectorComponent {

  @Input() catalogro: any;
  
  private clickedCatalogName;
  catalog : CatalogRO[];
 catalogs = new FormControl();
 private currentcatalog:Product[]=[];
 selectedCatalogs = this.catalog;
 private List:CatalogRO[];
 //private catalognames:any[];
public names:any[]=[];
public childCatalog:any[]=[];

  
  
  constructor(private service:CatalogServiceService,
    public dialog: MatDialog){
      //console.log('catalog is :',this.catalogro );
  }
  ngOnInit() {
    this.getCatalog();
    this.refresh();
  }
  onSelectCatalogName(event){
    const newVal = event.target.value;
    console.log(newVal);
    console.log(this.List);
    console.log(this.List.filter(name=>name.catalogName==newVal).find(id=>id.catalogId).catalogId);



  }
  onKey(value) { 
    //this.selectedCatalogs = this.search(value);
    }
  onItemSelect(item: any) {
    console.log(item);
  }
  getCatalog(){
    this.service.getCatalog().subscribe(list =>{

      console.log(list);

      this.List=<any>list;
      console.log(this.List[0].catalogId);
      //console.log(this.List.find(cat => cat.catalogId))
      this.clickedCatalogName=this.List[0].catalogId;
      this.List.forEach(function(name,index) {
       let catalognm=[];
       var self=this;
        if(name.catalogLevel == 1){
          self.names.push(name.catalogName);
        }
      }.bind(this));
       console.log(this.names);
       

       this.List.forEach(function(nm,index){
         var Child = this;
         if(nm.catalogLevel !=1){
          // console.log(nm.catalogName);

          Child.childCatalog.push(nm.catalogName);
          console.log( Child.childCatalog.push(nm.catalogName));
          console.log(this.childCatalog);
        }
       }.bind(this));
       console.log(this.childCatalog);
       
    })
    
    //console.log(this.productList.find(product=>product.productId));
  }
  parentCatalogSelected(catalogname){
    console.log(catalogname);
  }
  
  search(value: string) { 
    const filter = value.toLowerCase();
   //return this.List.filter(option => option.toLowerCase().trim().startsWith(filter));
  }
  onCreate(){
    const dialogRef = this.dialog.open(CatalogDetailsComponent, {
      width: '700px',
      height:'600px'
    });
    dialogRef.disableClose =true;
    // dialogRef.autoFocus =true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.catalog = result;
    });
  }
  clickedCatalog(){

  }
  refresh(){
    this.service.getCatalog().subscribe(ref =>{
      console.log(ref);
    })
  }
  
}


