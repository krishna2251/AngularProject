import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';
import { Options } from '../data';
@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  private option;

  constructor(private service:OptionsService) { }

  ngOnInit() {
  }

  getOptions(){
    this.service.getOption().subscribe(data =>{
      this.option =<Options[]>data;
      console.log(this.option);
    })
  }
}
