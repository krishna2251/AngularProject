import { Injectable } from '@angular/core';

@Injectable()
export class CommonServiceService {

   localStorageMap: any;

  constructor() { 
    this.localStorageMap = new Map<string, any>();
  }
  set(key: string, value:any){
    this.localStorageMap.set(key,value);
  }
  get(key: string): any {
    return this.localStorageMap.get(key);
  }
  // set(productId){
  //   this.productId=productId;
  //   console.log(this.productId);
  // }
  // get(){
  //   return this.productId();
  // }
}
