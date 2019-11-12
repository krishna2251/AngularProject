import { Component, OnInit, Input } from '@angular/core';
import { ImageUploadServiceService } from '../../services/image-upload-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {
  @Input() image: any;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private imageService: ImageUploadServiceService) { }

  ngOnInit() {
  }

  selectFile(event) {
    
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    this.progress.percentage = 0;
    
 
    this.currentFileUpload = this.selectedFiles.item(0);
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
