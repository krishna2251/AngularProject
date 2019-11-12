import { Component, OnInit, Input } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Product, CatalogRO, ProductCatalogDir } from '../data';
import { ProductListComponent } from '../product-sku-list/product-list.component';
import { CommonServiceService } from '../services/common-service.service';
import { CatalogServiceService } from '../services/catalog-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CatalogDetailsComponent } from '../catalog-details/catalog-details.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  product: FormGroup;

  //private cat;
 private savaCatalogId;
  private clickedCatalogName;
  private clickedCatalogId:any;
  catalog: CatalogRO[];
  catalogs = new FormControl();
  private currentcatalog: Product[] = [];
  selectedCatalogs = this.catalog;
  private List: CatalogRO[];

  public names: any[] = [];
  public childCatalog: any[] = [];

  constructor(private productDataService: ProductDataService,
    private service: CatalogServiceService, public dialog: MatDialog) {

  }

  ngOnInit() {
    //this.addProduct();
    this.getCatalog();
    this.refresh();

    this.product = new FormGroup({
      $key: new FormControl(null),
      productName: new FormControl('', Validators.required),
      productDesc: new FormControl('', Validators.required),
      searchTag: new FormControl('', Validators.required),
      manufacturerId: new FormControl('', Validators.required),
      storeId: new FormControl('', Validators.required),
      productCatalogDir: new FormArray([
        this.initProductCatalogDir(),
      ]),
      sku: new FormArray([
        this.initSku(),
      ]),

    });
  }
  initializeFormGroup() {
    this.product.setValue({
      $key: null,
      productName: '',
      productDesc: '',
      searchTag: '',
      manufacturerId: '',
      storeId: '',
    });
  }
  initProductCatalogDir() {
    return new FormGroup({
      primaryFlg: new FormControl(''),
    });

  }
  initSku() {
    return new FormGroup({
      imageUrl: new FormControl(''),
      price: new FormControl(''),
      productSkuCd: new FormControl(''),
      options: new FormArray([
        this.initOptions()
      ])
    });
  }
  initOptions() {
    return new FormGroup({
      optionName: new FormControl(''),
      optionValue: new FormControl('', Validators.required),

    });
  }
  onClear() {
    this.product.reset();
    this.initializeFormGroup();
  }
  addProduct() {
//this.commonService.set(productId);
    this.productDataService.saveProduct(this.product.value).subscribe(data => {
      console.log(data);
    })

  }
  addProductCatalogDir(product) {
    //   //const control =<FormArray>this.survey.get('pcds');
    this.productDataService.saveProduct(this.product.value).subscribe(
      data => {
        console.log(data);
       
      }
    )
    product.push(this.initProductCatalogDir);
  }
  onSelectCatalogName(event) {
    const newVal = event.target.value;
    //console.log(newVal);
   // console.log(this.List);
   console.log(this.List.filter(name => name.catalogName == newVal).find(id => id.catalogId).catalogId);
    this.clickedCatalogId = this.List.filter(name => name.catalogName == newVal).find(id => id.catalogId).catalogId;
    console.log(this.clickedCatalogId);
  }
  onKey(value) {
    //this.selectedCatalogs = this.search(value);
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  getCatalog() {

    this.service.getCatalog().subscribe(list => {

      console.log(list);

      this.List = <any>list;
      console.log(this.List[0].catalogId);
      //console.log(this.List.find(cat => cat.catalogId))
      this.clickedCatalogName = this.List[0].catalogId;
      this.List.forEach(function (name, index) {
        let catalognm = [];
        var self = this;
        if (name.catalogLevel == 1) {
          self.names.push(name.catalogName);
        }
      }.bind(this));
      console.log(this.names);


      this.List.forEach(function (nm, index) {
        var Child = this;
        if (nm.catalogLevel != 1) {
          // console.log(nm.catalogName);

          Child.childCatalog.push(nm.catalogName);
          console.log(Child.childCatalog.push(nm.catalogName));
          console.log(this.childCatalog);
        }
      }.bind(this));
      console.log(this.childCatalog);
    })
    

  }
  parentCatalogSelected(catalogname) {
    console.log(catalogname);
  }

  search(value: string) {
    const filter = value.toLowerCase();
    //return this.List.filter(option => option.toLowerCase().trim().startsWith(filter));
  }
  onCreate() {
    const dialogRef = this.dialog.open(CatalogDetailsComponent, {
      width: '700px',
      height: '600px'
    });
    dialogRef.disableClose = true;
    // dialogRef.autoFocus =true;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.catalog = result;
    });
  }
  clickedCatalog() {

  }
  refresh() {
    this.service.getCatalog().subscribe(ref => {
      console.log(ref);
    })
  }

  //  addSku(product) {
  //   this.productDataService.saveProduct(this.product.value).subscribe(
  //     data =>{
  //       console.log(data);
  //    }
  //   )
  //     product.push(this.initSku);
  //   }
  //   addOptions(j) {
  //      console.log(j)

  //    this.productDataService.saveProduct(this.product.value).subscribe(
  //       data =>{
  //        console.log(data);
  //       } )
  //       j.push(this.initOptions());
  //      }

  //      add() {
  //        this.productDataService.saveProduct(this.product.value).subscribe(
  //          data =>{
  //            console.log(data);
  //          }
  //        )

}























  // ngOnInit() {

  //  // console.log(this.clickedProduct);
  //   this.product = new FormGroup({
  //     $key: new FormControl(null),
  //     productName: new FormControl(''),
  //     productDesc: new FormControl(''),
  //     searchTag: new FormControl(''),
  //     manufacturerId:new FormControl(''),
  //     storeId:new FormControl(''),
  //     sku: new FormArray([
  //       this.initSku(),
  //     ]),
  //     productCatalogDir: new FormArray([
  //       this.initProductCatalogDir(),
  //     ]),
  //   });
  // }
  // initProductCatalogDir() {
  //   return new FormGroup({
  //     catalogId:new FormControl(''),
  //     primaryFlg:new FormControl(''),
  //     catalog: new FormArray([
  //       this.initCatalogRO()
  //     ])
  //   });
  // }

  // initSku() {
  //   return new FormGroup({
  //     imageUrl: new FormControl(''),
  //     price: new FormControl(''),
  //     productSkuCd: new FormControl(''),
  //     options: new FormArray([
  //       this.initOptions()
  //       ])
  //   });
  // }
  // initOptions() {
  //   return new FormGroup({
  //     optionName: new FormControl(''),
  //     optionValue: new FormControl('',Validators.required),

  //   });
  // }
  // initCatalogRO(){
  //   return new FormGroup({
  //     catalogId:new FormControl(''),
  //     parentCatalogId:new FormControl(''),
  //     catalogLevel: new FormControl(''),
  //     catalogName: new FormControl(''),
  //     catalogDesc:new FormControl(''),
  //     storeId:new FormControl(''),
  //       });
  // }

  // addProduct(){
  //   this.productDataService.saveProduct(this.product.value).subscribe(
  //     data=>{
  //       console.log(data);
  //     }
  //   )

  // }

  // addSku(survey) {
  //   this.productDataService.saveProduct(this.product.value).subscribe(
  //     data =>{
  //       console.log(data);
  //     }
  //   )
  //     survey.push(this.initSku);


  // }
  // addProductCatalogDir(survey){
  //   //const control =<FormArray>this.survey.get('pcds');
  //   this.productDataService.saveProduct(this.product.value).subscribe(
  //     data =>{
  //       console.log(data);
  //     }
  //   )
  //     survey.push(this.initProductCatalogDir);
  // }

  // addOptions(j) {
  //   console.log(j)

  //  this.productDataService.saveProduct(this.product.value).subscribe(
  //   data =>{
  //     console.log(data);
  //   }
  // )
  //   j.push(this.initOptions());
  // }

  // add() {
  //   this.productDataService.saveProduct(this.product.value).subscribe(
  //     data =>{
  //       console.log(data);
  //     }
  //   )

  // }
  //  getOptions(form) {

  //   return form.controls.options.controls;
  //  }



