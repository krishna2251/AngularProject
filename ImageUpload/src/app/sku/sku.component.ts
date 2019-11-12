import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})
export class SkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // sku = new FormGroup({
  //   imageUrl: new FormControl(''),
  //   price: new FormControl(''),
  //   productSkuCd: new FormControl(''),
  //   image : new FormArray('')
  // })

}
