import { Component, OnInit, ViewChild } from '@angular/core';
import { Sku } from '../data';
import { ProductDataService } from '../product-data.service';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SkuDetailsComponent } from '../sku-details/sku-details.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    //sku:FormGroup;
    dataSource: MatTableDataSource<Sku>;  
  
  displayedColumns: string[] = ['productSkuId','imageUrl', 'price', 'productSkuCd','productId','optionName','optionValue'];  
  @ViewChild(MatPaginator) paginator: MatPaginator;  
  @ViewChild(MatSort) sort: MatSort;
    sku: Sku[]=[];
    private skuList:any;
    public clickedItem:Sku;
   
  constructor(private productDataService: ProductDataService,
    fb:FormBuilder,
    private router: Router,
    private dialog : MatDialog) { }

  ngOnInit() {
    this.getSku();
    this.dataSource.paginator = this.paginator;  
    this.dataSource.sort = this.sort;  
}
getSku(){
  this.productDataService.retriveSku().subscribe(
    data=>{
      this.skuList=<Sku[]>data;
      this.dataSource = new MatTableDataSource(data);
      //this.dataSource = new MatTableDataSource(data.results);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      this.sku = <Sku[]>data;
      console.log("result sku is",this.skuList);
      console.log(this.sku[0].productSkuId);
    },
    error=>console.log(error)
  );
}
selectedRowItem(productSkuId){
    
  console.log(productSkuId);
   this.clickedItem=this.skuList.find(sku=>sku.productSkuId==productSkuId);
   console.log(this.clickedItem);
  
}

applyFilter(filterValue: string) {  
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
getClickedItem(){
  console.log(this.skuList);
  
}
onCreate(){
  const dialogRef = this.dialog.open(SkuDetailsComponent, {
    
  });
  dialogRef.disableClose =true;
}
}

