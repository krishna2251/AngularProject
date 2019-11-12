import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUploadServiceService } from '../../services/image-upload-service.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;
  
  constructor(private imageService : ImageUploadServiceService) { }

  ngOnInit() {
  }
  showFiles(enable: boolean) {
    this.showFile = enable;
 
    if (enable) {
      this.fileUploads = this.imageService.getFiles();
    }
  }

}
