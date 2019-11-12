import { Component, OnInit, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.scss'],
  
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;
  constructor() { }

  
  ngOnInit() {
  }

}
