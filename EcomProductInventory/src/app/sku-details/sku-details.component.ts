import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ProductDataService } from '../services/product-data.service';
import { Sku, Product } from '../data';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-sku-details',
  templateUrl: './sku-details.component.html',
  styleUrls: ['./sku-details.component.scss']
})
export class SkuDetailsComponent implements OnInit {
  
  //@Input() product :Product;
  sku :FormGroup;
  public getproductid;
  skus:Sku[];
  constructor(private productDataService: ProductDataService,
    private commonService: CommonServiceService) { }

  ngOnInit() {
    
    this.sku= new FormGroup({
      $key: new FormControl(null),
      imageUrl:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      productSkuCd:new FormControl('',Validators.required),
      sku: new FormArray([
        this.initSku(),
         ]),
    });
    this.getproductid = this.commonService.get('productId');
    console.log(this.getproductid);
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
     optionValue: new FormControl('',Validators.required),
     
   });
}
 onClear(){
  //this.sku.reset();
  //this.initializeFormGroup();
}
addSku(sku){
  this.getproductid = this.commonService.get('productId');
    console.log(this.getproductid);
  this.productDataService.saveProduct(this.sku.value).subscribe(skus =>{
    console.log(skus);
  })
}
// addSku(product){
//   this.productDataService.saveProduct(this.product).subscribe(sku =>{
//     console.log(sku);
//   })
// }
}
