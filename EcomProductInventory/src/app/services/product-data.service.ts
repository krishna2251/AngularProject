import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Product, Sku, CatalogRO, ProductCatalogDir } from './data';
import { Observable } from 'rxjs';
import { Product, Sku,Options } from '../data';
//import { Options } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  product: FormGroup;

 formData: { productName:'',productDesc:'',searchTag:'',manufacturerId:'',storeId:''}
  constructor(private http : HttpClient) { }

 //saveProduct(formData: Product){
   saveProduct(formData: Product){
   console.log(formData);
    
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:8091',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    console.log("before service");
    return this.http.post<Product>('http://localhost:8080/addproduct',formData,httpOptions).pipe();
    
  }
  retriveSku(): Observable<any[]>{
    //console.log(this.retriveSku);
    console.log("before sku service");
    return this.http.get<Sku[]>('http://localhost:8080/getAllSkus').pipe();
  }
  retriveProducts(): Observable<any[]>{
    console.log(" before product Service");
    return this.http.get<Product[]>('http://localhost:8080/getProducts').pipe();
  }
  editSku(editSku:Sku){
    console.log('before Edit Service');
    console.log(editSku);
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:8080',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    var url="http://localhost:8080/edit/"+editSku.productSkuId;
    return this.http.put<Product>(url,editSku,httpOptions).pipe();
    }

  editProduct(editProduct:Product){
    console.log('before Edit Service');
    console.log(editProduct);
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:8080',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    var url="http://localhost:8080/edit/"+editProduct.productId;
    return this.http.put<Product>(url,editProduct,httpOptions).pipe();
    }
    addSku(){
      //console.log(formData);
    
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:8091',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    console.log("before service");
    return this.http.post<Sku>('http://localhost:8080/addsku',httpOptions).pipe();
    
    }
    getOptions(){
      return this.http.get<Options[]>('http://localhost:8080/getOptions').pipe();
    }
}

