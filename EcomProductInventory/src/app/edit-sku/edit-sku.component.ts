import { Component, OnInit, Input } from '@angular/core';
import { Sku } from '../data';
import { ProductDataService } from '../product-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-sku',
  templateUrl: './edit-sku.component.html',
  styleUrls: ['./edit-sku.component.scss']
})
export class EditSkuComponent implements OnInit {

  @Input() clickedSku:Sku;
  sku:Sku;
  isActiveDiv: boolean =true;
  private productSkuId;
  constructor(private http:HttpClient,
    private productDataService: ProductDataService) { }

  ngOnInit() {
    this.clickedSku;
    console.log(this.clickedSku.imageUrl);
  }
  editSku(editSku){
    this.isActiveDiv = true;
    this.sku=editSku;
    console.log('id',editSku);
    this.productDataService.editSku(editSku).subscribe( edit => {
      this.sku=<any>edit;
      console.log('this.editSku',this.sku);
    })
  }
  formActive(){
  this.isActiveDiv = false;
  }
  

}
