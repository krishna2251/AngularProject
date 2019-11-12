import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../model';
import { Observable } from 'rxjs';
import { EditService } from '../edit.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
//import map = require('core-js/fn/map');
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public view: Observable<GridDataResult>;
  public gridState: State = {
      sort: [],
      skip: 0,
      take: 10
  };

  public editDataItem: Product;
  public isNew: boolean;
  private editService: EditService;

  constructor(@Inject(EditService) editServiceFactory: any) {
      this.editService = editServiceFactory();
  }

  public ngOnInit(): void {
      this.view = this.editService.pipe(map((data: any) => process(data, this.gridState)));

      this.editService.read();
  }

  public onStateChange(state: State) {
      this.gridState = state;

      this.editService.read();
  }

  public addHandler() {
      this.editDataItem = new Product();
      this.isNew = true;
  }

  public editHandler({dataItem}) {
      this.editDataItem = dataItem;
      this.isNew = false;
  }

  public cancelHandler() {
      this.editDataItem = undefined;
  }

  public saveHandler(product: Product) {
      this.editService.save(product, this.isNew);

      this.editDataItem = undefined;
  }

  public removeHandler({dataItem}) {
      this.editService.remove(dataItem);
  }

}
