import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product, Sku,Options } from '../data';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit{
  private productList:any;
  private clickedProductResult:Product[];
  private clickedSkuResult:Sku[];
  constructor(private productDataService:ProductDataService){

  }
  
  ngOnInit() {
    this.productDataService.retriveProducts().subscribe(
      data => {
        this.productList = <Product[]>data;
        console.log(this.productList);
        console.log(this.productList[0].productId);
       // console.log(this.productList.find(product=>product.productId));
        console.log('result product is', this.productList);
        console.log(this.productList[0].productName);
      });
  }
  
  public isDisabledProducts: boolean = true;
    public isDisabledOrders: boolean = true;

    public dataResultOrders: Array<{ orderName: string,orderId:number, productId: number, }>
  selectedCategory: any;
  selectedProduct: any;
  selectedOrder: any;


    handleCategoryChange(productid) {
      console.log(productid);
     // this.selectedCategory = value;
      this.selectedProduct = undefined;
      this.selectedOrder = undefined;

      if(productid == undefined){
        this.isDisabledProducts = true;
       // this.productList=[];
      }
      else{
        this.isDisabledProducts = false;
        this.clickedProductResult = this.productList.filter(product => product.productId == productid);
        
        console.log(this.clickedProductResult);
        console.log(this.clickedProductResult[0].sku[0].options);
       // this.clickedSkuResult=this.clickedProductResult.filter(sku=>sku.sku);
      }

      this.isDisabledOrders = true;
      this.dataResultOrders = [];

    }

    handleProductChange(productid) {
      this.selectedProduct = productid;
      this.selectedOrder = undefined;

      if(productid == undefined){
        this.isDisabledOrders = true;
        this.clickedSkuResult = [];
      } else {
        this.isDisabledOrders = false;
        this.clickedProductResult = this.productList.filter(product=>product.optionId==productid);
        
        console.log(this.clickedProductResult);
        console.log(this.clickedProductResult[0].sku[0].options);
      }
    }

    handleOrderChange(value) {
      this.selectedOrder = value;
    }
}