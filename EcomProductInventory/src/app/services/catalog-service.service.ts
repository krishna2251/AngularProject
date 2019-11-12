import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatalogRO } from '../data';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {

  private catalog:CatalogRO;
  formData: { catalogName:'',catalogDesc:'',catalogLevel:'',parentCatalogId:'',storeId:''}

  constructor(private http : HttpClient) { }

  getCatalog():Observable<any[]>{
    console.log("before service call");
    return this.http.get<CatalogRO[]>('http://localhost:8080/getCatalog').pipe();
  }
  addCatalog(formData:CatalogRO){
    console.log("Before Adding Service ");
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
    return this.http.post<CatalogRO>('http://localhost:8080/addCatalog',formData,httpOptions);
  }
}
