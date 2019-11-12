
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import { Product, ProductCatalogDir } from '../data';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
 @Input() clickedProduct:Product;
  product:Product;
  private productId ;
  isActiveDiv: boolean =true;

  constructor(private http:HttpClient,
    private productDataService: ProductDataService) { }

 

  ngOnInit() {
    console.log(this.clickedProduct);
     console.log(this.clickedProduct.productName);
     console.log(this.clickedProduct.productCatalogDir[0].catalog.catalogId);
   
  }

  editProduct(editProduct){
    this.isActiveDiv = true;
    this.product=editProduct;
    console.log('id',editProduct);
    this.productDataService.editProduct(editProduct).subscribe( edit => {
      this.product=<Product>edit;
      console.log('this.editProduct',this.product);
    })
  }
  formActive(){
  this.isActiveDiv = false;
  }
  // onSubmit(clickedProduct){
  //      this.productDataService.editProduct(this.clickedProduct).subscribe(
  //        res =>{
  //          console.log(res)
  //          console.log('after Service');
  //        }
  //      ) 
    
  //   }
  
}
