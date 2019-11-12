import { Component, OnInit } from '@angular/core';
import { ImageUploadServiceService } from '../services/image-upload-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-sku-image-upload',
  templateUrl: './product-sku-image-upload.component.html',
  styleUrls: ['./product-sku-image-upload.component.scss']
})
export class ProductSkuImageUploadComponent implements OnInit {

  urls = [];
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private imageService: ImageUploadServiceService) { }

  ngOnInit() {
  }
 
  // onSelectFile(event) {
  //   //this.selectedFiles = event.target.files;
  //   if (event.target.files && event.target.files[0]) {
  //       var filesAmount = event.target.files.length;
  //       for (let i = 0; i < filesAmount; i++) {
  //               var reader = new FileReader();

  //               reader.onload = (event:any) => {
  //                 console.log(event.target.result);
  //                  this.urls.push(event.target.result); 
  //               }

  //               reader.readAsDataURL(event.target.files[i]);
  //       }
  //   }
  // }
  selectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    this.progress.percentage = 0;
 
   // this.currentFileUpload = this.selectedFiles.item(0);
    this.imageService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Image is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;

}
}