export class Product {
  
    productName: string; // required field with minimum 5 characters
    productDesc: string;
    searchTag: string;
    productId:number;
    manufacturerId:number;
    storeId:number;
    sku: Sku; // user can have one or more skus
    productCatalogDir:ProductCatalogDir;
}   

export class Sku {
    productSkuId:number;
    productId:number;
    imageUrl: string;  
    price: number;
    productSkuCd:string;
    options:Options;
}
export class Options{
    optionName :string;
    optionValue :string;
}
export class ProductCatalogDir{
    catalogId:number;
    primaryFlg:string;
    catalog:CatalogRO;
}
export class CatalogRO{
    catalogId:number;
    parentCatalogId:number;
    catalogLevel:number;
    catalogName:string;
    catalogDesc:string;
    storeId:number;
}

