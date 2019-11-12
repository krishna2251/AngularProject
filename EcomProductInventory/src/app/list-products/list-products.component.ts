import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ProductDataService } from '../product-data.service';
import { FormBuilder } from '@angular/forms';
import { Product, ProductCatalogDir, Sku, CatalogRO } from '../data';
import { Collision } from '@progress/kendo-angular-popup';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonServiceService } from '../services/common-service.service';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
 
private productList:any;
public getproductid;
 
  dataSource: MatTableDataSource<Product>;  
  
  displayedColumns: string[] = ['productId','productName', 'productDesc', 'searchTag', 'manufacturerId','storeId','actions'];  
  @ViewChild(MatPaginator) paginator: MatPaginator;  
  @ViewChild(MatSort) sort: MatSort;  

 public clickedItem:Product;

 product: Product;
 
 public productidinform;
  constructor(private productDataService: ProductDataService,
    fb: FormBuilder,private router: Router,
    private dialog : MatDialog,
    private commonService : CommonServiceService) {
   
    }
   

  ngOnInit() {
    
    this.getProducts();
    this.refreshProducts();
    this.dataSource.paginator = this.paginator;  
    this.dataSource.sort = this.sort;  
    
  }
  refreshProducts(){
    this.productDataService.retriveProducts().subscribe(refresh =>{
      console.log(refresh);
   
    })
  }
  selectedRowItem(productId){
    
    console.log(productId);
     this.clickedItem=this.productList.find(product=>product.productId==productId);
     console.log(this.clickedItem);
    //  this.getproductid = this.commonService.get('productId');
    // console.log(this.getproductid);
    
  }

  getProducts(){
    this.productDataService.retriveProducts().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        this.productList = <Product[]>data;
        console.log(this.productList);
        console.log(this.productList[0].productId);
        this.productidinform = this.productList[0].productId;
       // console.log(this.productList.find(product=>product.productId));
        console.log('result product is', this.productList);
        this.commonService.set('productId', this.productidinform);
       // console.log(this.productList[7].productCatalogDir[0].catalog.catalogId);
      },
      error => console.log(error)
    );
  }
  getClickedItem(){
    console.log(this.productList);
    
  }
  applyFilter(filterValue: string) {  
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onCreate(){
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      
    });
    dialogRef.disableClose =true;
  //   //dialogRef.width="80%";
  //   // const dialogConfig = new MatDialogConfig();
  //   //  dialogConfig.disableClose =true;
  //   //  dialogConfig.autoFocus=true;
  //   //  dialogConfig.width="80%";
  //   //  this.dialog.open(ProductDetailsComponent, dialogConfig);
    

  // }
  
  }
  
}
