import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSkuImageUploadComponent } from './product-sku-image-upload.component';

describe('ProductSkuImageUploadComponent', () => {
  let component: ProductSkuImageUploadComponent;
  let fixture: ComponentFixture<ProductSkuImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSkuImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSkuImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
