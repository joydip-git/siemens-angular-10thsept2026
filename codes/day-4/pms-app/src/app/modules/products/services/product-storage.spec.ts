import { TestBed } from '@angular/core/testing';
import { ProductStorage } from './product-storage';

describe('ProductStorage', () => {
  let service: ProductStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
