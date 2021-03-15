import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductListItem } from 'src/app/models/product-list-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  currentProductId: number = null;
  productsList: ProductListItem[] = [];
  productCategories: ProductCategory[] = [];

  filterText: string = null;
  filterCategoryId: number = null;

  private filterTextChangedSubject: Subject<string> = new Subject<string>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productCategories.subscribe(categories => {
      this.productCategories = categories;
    });

    this.fetchProducts();
    this.productService.fetchCategories();
  }

  filterTextChanged() {
    if (this.filterTextChangedSubject.observers.length == 0) {
      this.filterTextChangedSubject.pipe(
        debounceTime(2000), distinctUntilChanged()
      ).subscribe(filter => {
        this.fetchProducts();
      })
    }

    this.filterTextChangedSubject.next(this.filterText);
  }

  productCategoryFilterChanged() {
    this.fetchProducts();
  }

  clearFilters() {
    if (this.filterText || this.filterCategoryId) {
      this.filterText = null;
      this.filterCategoryId = null;
      this.fetchProducts();
    }
  }

  productSaved() {
    this.fetchProducts();
    this.currentProductId = null;
  }

  fetchProducts() {
    this.productService.getProductList(this.filterText, this.filterCategoryId).subscribe(products => {
      this.productsList = products;
    });
  }

  initEditor(productId: number = -1) {
    this.currentProductId = productId;
  }

}
